import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getCurrentCustomer } from "@/lib/auth/session"
import { getCustomerToken } from "@/lib/auth/session"
import { getCustomerOrders } from "@/lib/shopify/orders"
import { Button } from "@/components/ui/button"
import { Package, ArrowRight } from "lucide-react"

export default async function OrdersPage() {
  const customer = await getCurrentCustomer()

  if (!customer) {
    redirect("/login")
  }

  const token = await getCustomerToken()
  if (!token) {
    redirect("/login")
  }

  let orders: any[] = []
  try {
    orders = await getCustomerOrders(token, 20)
  } catch (error) {
    console.error("[Orders] Error fetching orders:", error)
    // Continue with empty orders array
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Order History</h1>
              <p className="text-gray-400">View and track your orders</p>
            </div>
            <Button asChild variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
              <Link href="/account">Back to Account</Link>
            </Button>
          </div>

          {orders.length === 0 ? (
            <div className="bg-gray-900 rounded-lg p-12 border border-gray-800 text-center">
              <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No orders yet</h2>
              <p className="text-gray-400 mb-6">Start shopping to see your orders here</p>
              <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                <Link href="/collections/all">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-yellow-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-xl font-semibold">Order {order.name}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.fulfillmentStatus === "FULFILLED"
                              ? "bg-green-500/20 text-green-400"
                              : order.financialStatus === "PAID"
                              ? "bg-blue-500/20 text-blue-400"
                              : order.cancelledAt
                              ? "bg-red-500/20 text-red-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {order.cancelledAt
                            ? "Cancelled"
                            : order.fulfillmentStatus === "FULFILLED"
                            ? "Fulfilled"
                            : order.financialStatus === "PAID"
                            ? "Paid"
                            : order.financialStatus}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400 mb-4">
                        <div>
                          <span className="block text-gray-500">Date</span>
                          <span className="text-white">
                            {new Date(order.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div>
                          <span className="block text-gray-500">Total</span>
                          <span className="text-white font-semibold">
                            ${Number.parseFloat(order.totalPrice.amount).toFixed(2)} {order.totalPrice.currencyCode}
                          </span>
                        </div>
                        <div>
                          <span className="block text-gray-500">Items</span>
                          <span className="text-white">
                            {order.lineItems.edges.reduce((sum: number, item: any) => sum + item.node.quantity, 0)}
                          </span>
                        </div>
                        <div>
                          <span className="block text-gray-500">Status</span>
                          <span className="text-white capitalize">
                            {order.fulfillmentStatus?.toLowerCase() || order.financialStatus?.toLowerCase() || "Processing"}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {order.lineItems.edges.slice(0, 3).map((item: any) => (
                          <div key={item.node.id} className="flex items-center gap-2 text-sm">
                            {item.node.product.images.edges[0] && (
                              <Image
                                src={item.node.product.images.edges[0].node.url}
                                alt={item.node.product.title}
                                width={40}
                                height={40}
                                className="rounded"
                              />
                            )}
                            <span className="text-gray-300">
                              {item.node.title} × {item.node.quantity}
                            </span>
                          </div>
                        ))}
                        {order.lineItems.edges.length > 3 && (
                          <span className="text-gray-400 text-sm">+{order.lineItems.edges.length - 3} more</span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button asChild variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                        <Link href={`/account/orders/${order.name.replace("#", "")}`}>
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

