import Link from "next/link"
import { redirect } from "next/navigation"
import { getCurrentCustomer } from "@/lib/auth/session"
import { RegisterForm } from "@/components/auth/register-form"

export default async function RegisterPage() {
  // Redirect if already logged in
  const customer = await getCurrentCustomer()
  if (customer) {
    redirect("/account")
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-gray-400">Sign up to get started</p>
        </div>

        <RegisterForm />

        <div className="text-center">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-yellow-400 hover:text-yellow-300 font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

