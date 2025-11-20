import { redirect } from "next/navigation"
import { getCurrentCustomer } from "@/lib/auth/session"

/**
 * Server component that protects routes by checking authentication
 * Redirects to login if not authenticated
 */
export async function AuthGuard({ children }: { children: React.ReactNode }) {
  const customer = await getCurrentCustomer()
  
  if (!customer) {
    redirect("/login")
  }

  return <>{children}</>
}

