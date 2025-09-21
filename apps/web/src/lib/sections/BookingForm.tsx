import { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"

export function BookingForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [massageType, setMassageType] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, "appointments"), {
        name,
        email,
        date,
        time,
        massageType,
        createdAt: serverTimestamp(),
      })
      alert("Appointment booked!")
      setName(""); setEmail(""); setDate(""); setTime(""); setMassageType("")
    } catch (error) {
      console.error("Error booking appointment:", error)
      alert("Failed to book appointment.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" required />
      <input value={date} onChange={e => setDate(e.target.value)} type="date" required />
      <input value={time} onChange={e => setTime(e.target.value)} type="time" required />
      <select value={massageType} onChange={e => setMassageType(e.target.value)} required>
        <option value="">Select massage type</option>
        <option value="Swedish">Swedish</option>
        <option value="Deep Tissue">Deep Tissue</option>
        <option value="Pregnancy">Pregnancy</option>
      </select>
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Book Appointment</button>
    </form>
  )
}