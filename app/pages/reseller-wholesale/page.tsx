import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ResellerWholesalePage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-black">Wholesale Orders</h1>
        </div>

        <div className="space-y-8 mb-12">
          {/* Introductory Paragraph */}
          <p className="text-lg leading-relaxed text-gray-800 mb-8">
            Moment Pickleball is dedicated to revolutionizing pickleball training, and our quality products are designed to enhance performance and skill development for players of all levels. We're delighted to offer our premium pickleball training products at wholesale prices for businesses and competitive organizations looking to place bulk orders.
          </p>

          {/* Wholesale Program Ideal For */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              Our wholesale program is ideal for a variety of businesses and organizations, including:
            </h2>
            <ul className="space-y-3 text-gray-800 ml-6">
              <li className="list-disc">
                <strong>Proshops & Specialty Retailers:</strong> Expand your product offerings with cutting-edge pickleball training products.
              </li>
              <li className="list-disc">
                <strong>Coaches and Trainers:</strong> Equip your training programs with the best tools to help your students excel.
              </li>
              <li className="list-disc">
                <strong>Pickleball Clubs:</strong> Provide your club members with access to premium training equipment at discounted rates.
              </li>
              <li className="list-disc">
                <strong>Tournament Organizers:</strong> Offer unique prizes and giveaways to participants and attendees.
              </li>
            </ul>
          </section>

          {/* Wholesale Ordering Process */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              Wholesale ordering with Moment Pickleball is easy:
            </h2>
            <ul className="space-y-3 text-gray-800 ml-6">
              <li className="list-disc">
                <strong>Contact Us:</strong> Provide your contact information and any specific requirements or questions you may have. We will then send you our wholesale account form.
              </li>
              <li className="list-disc">
                <strong>Product Selection:</strong> Upon receipt we will send you our wholesale product sheet. Our team will work with you to select the products that best fit your needs and preferences as well as pricing and payment terms.
              </li>
              <li className="list-disc">
                <strong>Order Confirmation:</strong> Once you're satisfied with the details, we'll send you an order confirmation and invoice.
              </li>
              <li className="list-disc">
                <strong>Payment:</strong> Submit your payment as specified in the invoice.
              </li>
              <li className="list-disc">
                <strong>Shipping:</strong> We will process your order and arrange for timely shipping to your location.
              </li>
            </ul>
          </section>

          {/* Direct Email Contact */}
          <p className="text-lg text-gray-800 mt-8">
            Email us at <a href="mailto:momentpickleball@gmail.com" className="text-blue-600 hover:underline">momentpickleball@gmail.com</a> to start your wholesale order.
          </p>
        </div>

        {/* Contact Us Form */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Contact Us</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-black">Name</Label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Name" 
                  className="mt-1 bg-white text-black border-gray-300" 
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-black">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Email" 
                  className="mt-1 bg-white text-black border-gray-300" 
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-black">Phone number</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="Phone number" 
                className="mt-1 bg-white text-black border-gray-300" 
              />
            </div>

            <div>
              <Label htmlFor="comment" className="text-black">Comment</Label>
              <Textarea 
                id="comment" 
                placeholder="Comment" 
                rows={6} 
                className="mt-1 bg-white text-black border-gray-300" 
              />
            </div>

            <Button 
              type="submit" 
              className="bg-black hover:bg-gray-800 text-[#fdfe06] py-6 text-lg font-semibold rounded"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
