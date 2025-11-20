"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { register } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export function RegisterForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const result = await register(formData)

    if (result.success) {
      toast.success(result.message || "Account created successfully")
      router.push("/account")
      router.refresh()
    } else {
      setError(result.error || "Registration failed")
      toast.error(result.error || "Registration failed")
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-lg border border-gray-800">
      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-white">
            First Name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            disabled={isLoading}
            className="bg-gray-800 text-white border-gray-700"
            placeholder="John"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-white">
            Last Name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            disabled={isLoading}
            className="bg-gray-800 text-white border-gray-700"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          Email <span className="text-red-400">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          disabled={isLoading}
          className="bg-gray-800 text-white border-gray-700"
          placeholder="your@email.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-white">
          Password <span className="text-red-400">*</span>
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          minLength={6}
          disabled={isLoading}
          className="bg-gray-800 text-white border-gray-700"
          placeholder="••••••••"
        />
        <p className="text-xs text-gray-400">Must be at least 6 characters</p>
      </div>

      <div className="flex items-center space-x-2">
        <input
          id="acceptsMarketing"
          name="acceptsMarketing"
          type="checkbox"
          className="w-4 h-4 rounded border-gray-700 bg-gray-800 text-yellow-400 focus:ring-yellow-400"
        />
        <Label htmlFor="acceptsMarketing" className="text-sm text-gray-300 cursor-pointer">
          Subscribe to our newsletter for updates and special offers
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
      >
        {isLoading ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  )
}

