"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    const result = await subscribeToNewsletter(email)

    if (result.success) {
      setStatus("success")
      setMessage(result.message)
      setEmail("")
    } else {
      setStatus("error")
      setMessage(result.message)
    }

    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus("idle")
      setMessage("")
    }, 3000)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-white text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
        />
        <Button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
      {message && (
        <p className={`text-sm mt-2 ${status === "success" ? "text-green-400" : "text-red-400"}`}>{message}</p>
      )}
    </div>
  )
}
