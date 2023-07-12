import { NextResponse } from "next/server"
// @ts-ignore
import { validateCartItems } from "use-shopping-cart/utilities"

import { inventory } from "@/config/inventory"
import { stripe } from "@/lib/stripe"

export async function POST(request: Request) {
  const cartDetails = await request.json()
  const lineItems = validateCartItems(inventory, cartDetails)
  const origin = request.headers.get('origin')

  let session;
  try {
    session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE']
      },
      shipping_options: [
        {
          shipping_rate: "shr_1NT0kDICoC1BACc1DFncjEIt"
        }
      ],
      billing_address_collection: "auto",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`
    })
    console.log('Created Stripe session:', session)
  } catch (error) {
    console.log('Error creating Stripe session:', error)
    throw error; // Re-throw the error so it's not swallowed and the caller can handle it.
  }

  return NextResponse.json(session)
}