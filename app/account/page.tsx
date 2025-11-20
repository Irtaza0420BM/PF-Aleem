import { redirect } from "next/navigation"
import Link from "next/link"
import { getCurrentCustomer } from "@/lib/auth/session"
import { Button } from "@/components/ui/button"
import { Package, Settings, MapPin, LogOut } from "lucide-react"
import { logout } from "@/app/actions/auth"

export default async function AccountPage() {
  const customer = await getCurrentCustomer()

  if (!customer) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">My Account</h1>
            <p className="text-gray-400">Welcome back, {customer.firstName || customer.email}!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Account Navigation */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h2 className="text-xl font-semibold mb-4">Account</h2>
                <nav className="space-y-2">
                  <Link
                    href="/account/orders"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
                  >
                    <Package className="w-5 h-5" />
                    <span>Order History</span>
                  </Link>
                  <Link
                    href="/account/addresses"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Addresses</span>
                  </Link>
                  <Link
                    href="/account/settings"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
                  >
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                  </Link>
                </nav>

                <form action={logout} className="mt-6 pt-6 border-t border-gray-800">
                  <Button
                    type="submit"
                    variant="outline"
                    className="w-full border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </form>
              </div>
            </div>

            {/* Account Info */}
            <div className="md:col-span-2">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h2 className="text-xl font-semibold mb-6">Account Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400">Email</label>
                    <p className="text-white font-medium">{customer.email}</p>
                  </div>
                  {customer.firstName && (
                    <div>
                      <label className="text-sm text-gray-400">First Name</label>
                      <p className="text-white font-medium">{customer.firstName}</p>
                    </div>
                  )}
                  {customer.lastName && (
                    <div>
                      <label className="text-sm text-gray-400">Last Name</label>
                      <p className="text-white font-medium">{customer.lastName}</p>
                    </div>
                  )}
                  {customer.phone && (
                    <div>
                      <label className="text-sm text-gray-400">Phone</label>
                      <p className="text-white font-medium">{customer.phone}</p>
                    </div>
                  )}
                  <div>
                    <label className="text-sm text-gray-400">Member Since</label>
                    <p className="text-white font-medium">
                      {new Date(customer.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                    <Link href="/account/orders">View Orders</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                    <Link href="/collections/all">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

