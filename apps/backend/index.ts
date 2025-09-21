import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { getSanityClient } from "./src/lib/cms/sanityClient.js"
import { PAGE_QUERY } from "./src/lib/cms/queries/index.js"

dotenv.config();
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter((origin): origin is string => typeof origin === "string" && origin.length > 0);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "OPTIONS"],
}));

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ----- Static Assets -----
const assetsPath = path.join(process.cwd(), "assets");
app.use("/assets", express.static(assetsPath));

// -------- Page Routes --------
app.get("/page/:slug", async (req: Request, res: Response) => {
  const { slug } = req.params
  const client = getSanityClient()

  try {
    const page = await client.fetch(PAGE_QUERY, { slug })

    if (!page) return res.status(404).json({ error: "Page not found" })

    res.json(page)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Server error" })
  }
})

// -------- Start Server --------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
export default app;
