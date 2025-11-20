import { type NextRequest, NextResponse } from "next/server"
import { createHmac } from "crypto"
import {
  revalidateProduct,
  revalidateCollection,
  revalidatePage,
  revalidateMetaobject,
  WEBHOOK_SECRET,
} from "@/lib/shopify-client"
import {
  processOrderCreate,
  processOrderUpdate,
  processOrderPaid,
  processOrderFulfilled,
  processOrderCancelled,
} from "@/lib/orders/processor"
import { processInventoryUpdate } from "@/lib/inventory/processor"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  if (!WEBHOOK_SECRET) {
    console.error("[Webhook] Missing SHOPIFY_WEBHOOK_SECRET")
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 })
  }

  // Verify webhook signature
  const hmac = request.headers.get("X-Shopify-Hmac-Sha256")
  const topic = request.headers.get("X-Shopify-Topic")

  if (!hmac || !topic) {
    return NextResponse.json({ error: "Missing webhook headers" }, { status: 400 })
  }

  const body = await request.text()

  const hash = createHmac("sha256", WEBHOOK_SECRET).update(body, "utf8").digest("base64")

  if (hash !== hmac) {
    console.error("[Webhook] Invalid HMAC signature")
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
  }

  console.log(`[Webhook] Received: ${topic}`)

  // Parse body
  let payload: any
  try {
    payload = JSON.parse(body)
  } catch (error) {
    console.error("[Webhook] Invalid JSON:", error)
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  // Handle webhook async (don't block response)
  handleWebhook(topic, payload).catch((error) => {
    console.error(`[Webhook] Error handling ${topic}:`, error)
  })

  return NextResponse.json({ received: true })
}

async function handleWebhook(topic: string, payload: any) {
  const id = payload.id || payload.admin_graphql_api_id
  const handle = payload.handle

  switch (topic) {
    case "products/create":
    case "products/update":
      console.log(`[Webhook] Revalidating product: ${id}`)
      revalidateProduct(id, handle)
      break

    case "products/delete":
      console.log(`[Webhook] Product deleted: ${id}`)
      revalidateProduct(id, handle)
      break

    case "collections/create":
    case "collections/update":
      console.log(`[Webhook] Revalidating collection: ${id}`)
      revalidateCollection(id, handle)
      break

    case "collections/delete":
      console.log(`[Webhook] Collection deleted: ${id}`)
      revalidateCollection(id, handle)
      break

    case "pages/create":
    case "pages/update":
      console.log(`[Webhook] Revalidating page: ${id}`)
      revalidatePage(id, handle)
      break

    case "pages/delete":
      console.log(`[Webhook] Page deleted: ${id}`)
      revalidatePage(id, handle)
      break

    case "metaobjects/create":
    case "metaobjects/update":
    case "metaobjects/delete":
      const type = payload.type || "unknown"
      console.log(`[Webhook] Revalidating metaobject: ${type}:${id}`)
      revalidateMetaobject(type, id)
      break

    // Order webhooks
    case "orders/create":
      console.log(`[Webhook] New order created: ${payload.name || id}`)
      await processOrderCreate(payload)
      break

    case "orders/update":
      console.log(`[Webhook] Order updated: ${payload.name || id}`)
      await processOrderUpdate(payload)
      break

    case "orders/paid":
      console.log(`[Webhook] Order paid: ${payload.name || id}`)
      await processOrderPaid(payload)
      break

    case "orders/fulfilled":
      console.log(`[Webhook] Order fulfilled: ${payload.name || id}`)
      await processOrderFulfilled(payload)
      break

    case "orders/cancelled":
      console.log(`[Webhook] Order cancelled: ${payload.name || id}`)
      await processOrderCancelled(payload)
      break

    // Inventory webhooks
    case "inventory_levels/update":
      console.log(`[Webhook] Inventory updated: ${id}`)
      await processInventoryUpdate(payload)
      break

    // Customer webhooks
    case "customers/create":
      console.log(`[Webhook] New customer created: ${payload.email || id}`)
      // TODO: Handle new customer
      break

    case "customers/update":
      console.log(`[Webhook] Customer updated: ${payload.email || id}`)
      // TODO: Handle customer update
      break

    default:
      console.log(`[Webhook] Unhandled topic: ${topic}`)
  }
}
