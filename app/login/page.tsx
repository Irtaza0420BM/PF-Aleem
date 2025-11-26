import Link from "next/link"
import { redirect } from "next/navigation"
import { getCurrentCustomer } from "@/lib/auth/session"
import { LoginForm } from "@/components/auth/login-form"

export default async function LoginPage() {
  // Redirect if already logged in
  const customer = await getCurrentCustomer()
  if (customer) {
    redirect("/account")
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#fdfe06] mb-2">Welcome Back</h1>
          <p className="text-[#fdfe06]">Sign in to your account</p>
        </div>

        <LoginForm />

        <div className="text-center space-y-2">
          <p className="text-[#fdfe06]">
            Don't have an account?{" "}
            <Link href="/register" className="text-[#fdfe06] hover:text-yellow-300 font-semibold">
              Sign up
            </Link>
          </p>
          <p className="text-gray-400">
            <Link href="/forgot-password" className="text-[#fdfe06] hover:text-yellow-300 text-sm">
              Forgot your password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

