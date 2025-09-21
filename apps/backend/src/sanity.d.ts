declare namespace NodeJS {
  interface ProcessEnv {
    SANITY_PROJECT_ID: string;
    SANITY_DATASET: string;
    FRONTEND_URL: string;
    PORT?: string;
  }
}
