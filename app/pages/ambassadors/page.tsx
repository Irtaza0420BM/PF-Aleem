import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AmbassadorsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black uppercase tracking-wide">
            MOMENT AMBASSADOR PROGRAMS
          </h1>
        </div>

        {/* Top Section - White Background */}
        <div className="mb-12 space-y-6">
          <p className="text-lg leading-relaxed text-gray-800">
            <strong>MOMENT PICKLEBALL AMBASSADOR PROGRAMS</strong> develops and endorses superlative individuals 
            who share a passion for Moment Pickleball's commitment to the pickleball community, mindset and 
            mental health, and dedication to the overall growth of the sport.
          </p>

          <p className="text-lg leading-relaxed text-gray-800">
            Moment Pickleball Ambassadors are passionate advocates who embody our commitment to excellence both 
            on and off the court. Our Ambassadors are community influencers, such as Pickleball athletes, open 
            play competitors, coaches, social media influencers, as well as advanced 4.5+ players...all of whom 
            serve as enthusiastic advocates and trusted pickleball resources for their local communities.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 text-center font-semibold mt-8">
            Moment offers a 3-tiered Ambassador structure to accommodate different levels of commitment and reach.
          </p>
        </div>

        {/* AMBASSADOR LOCAL Section - Light Grey Background */}
        <div className="bg-gray-100 p-8 md:p-12 rounded-lg mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black uppercase tracking-wide">
            AMBASSADOR LOCAL
          </h2>
          
          <p className="text-lg leading-relaxed text-gray-800 mb-8">
            Perfect for local rec players who hold a unique passion for pickleball and have a direct connection with their community.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">BENEFITS:</h3>
              <ul className="space-y-3 text-gray-800">
                <li>
                  <strong>Free Moment Pickleball Gear:</strong> Free Merch to show off!
                </li>
                <li>
                  <strong>10% Commission:</strong> Earn a 10% commission on all purchases your customers make using your unique affiliate code.
                </li>
                <li>
                  <strong>Exclusive Product Access:</strong> Get early access to new product releases and updates from Moment Pickleball.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">YOUR AUDIENCE BENEFITS:</h3>
              <ul className="space-y-3 text-gray-800">
                <li>
                  <strong>10% Discount:</strong> Your audience receives a 10% discount on their purchases.
                </li>
                <li>
                  <strong>Free Shipping:</strong> Your audience enjoys free shipping on all Moment Pickleball orders over $30.00.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">REQUIREMENTS:</h3>
              <ul className="space-y-3 text-gray-800 list-disc list-inside">
                <li>Must be a local business or individual with a local reach.</li>
                <li>Minimum of 250 followers or subscribers on social media or email list.</li>
                <li>3-5 regular social media promotions of Moment Pickleball products to your audience per month.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AMBASSADOR REGIONAL Section */}
        <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black uppercase tracking-wide">
            AMBASSADOR REGIONAL
          </h2>
          
          <p className="text-lg leading-relaxed text-gray-800 mb-8">
            Ideal for regional influencers, athletes, and coaches who have a wider reach beyond their local community.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">BENEFITS:</h3>
              <ul className="space-y-3 text-gray-800">
                <li>
                  <strong>15% Commission:</strong> Earn a 15% commission on all purchases made using your unique affiliate code.
                </li>
                <li>
                  <strong>Priority Product Access:</strong> Be the first to access new product releases and exclusive updates.
                </li>
                <li>
                  <strong>Enhanced Marketing Support:</strong> Receive premium marketing materials, including personalized content and promotional strategies.
                </li>
                <li>
                  <strong>Free Moment Pickleball Gear:</strong> More Merch!
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">YOUR AUDIENCE BENEFITS:</h3>
              <ul className="space-y-3 text-gray-800">
                <li>
                  <strong>15% Discount:</strong> Your customers receive a 15% discount on their purchases.
                </li>
                <li>
                  <strong>Free Shipping:</strong> Free shipping on all Moment Pickleball orders over $30.00
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">REQUIREMENTS:</h3>
              <ul className="space-y-3 text-gray-800 list-disc list-inside">
                <li>Must have a regional influence, with reach across multiple cities or states.</li>
                <li>Minimum of 500 followers or subscribers on social media or email list.</li>
                <li>5-10 Social media mentions / promotions of Moment Pickleball products through various channels.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="mt-16 mb-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Join the Moment Pickleball Ambassador Program
            </h2>
            <p className="text-lg text-gray-800 mb-4 max-w-3xl mx-auto leading-relaxed">
              Become part of the Moment Pickleball family and help your community, region, or nation discover the benefits of our exceptional training products.
            </p>
            <p className="text-base text-gray-600 mt-6">
              To apply for the program, fill out the form below.
            </p>
          </div>

          {/* Application Form */}
          <div className="bg-white border border-gray-300 rounded-lg p-8 md:p-12 shadow-sm">
            <form className="space-y-6">
              {/* First Name / Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-black">First Name</Label>
                  <Input 
                    id="firstName" 
                    type="text" 
                    placeholder="First Name" 
                    className="mt-1 bg-white text-black border-gray-300" 
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-black">Last Name</Label>
                  <Input 
                    id="lastName" 
                    type="text" 
                    placeholder="Last Name" 
                    className="mt-1 bg-white text-black border-gray-300" 
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-black">Email*</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Email" 
                  className="mt-1 bg-white text-black border-gray-300" 
                  required
                />
              </div>

              {/* City / City/Zip */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="city" className="text-black">City</Label>
                  <Input 
                    id="city" 
                    type="text" 
                    placeholder="City" 
                    className="mt-1 bg-white text-black border-gray-300" 
                  />
                </div>
                <div>
                  <Label htmlFor="cityZip" className="text-black">City/Zip</Label>
                  <Input 
                    id="cityZip" 
                    type="text" 
                    placeholder="City/Zip" 
                    className="mt-1 bg-white text-black border-gray-300" 
                  />
                </div>
              </div>

              {/* Company or Organization */}
              <div>
                <Label htmlFor="company" className="text-black">Company or Organization</Label>
                <Input 
                  id="company" 
                  type="text" 
                  placeholder="Company or Organization" 
                  className="mt-1 bg-white text-black border-gray-300" 
                />
              </div>

              {/* Website */}
              <div>
                <Label htmlFor="website" className="text-black">Website</Label>
                <Input 
                  id="website" 
                  type="url" 
                  placeholder="Website" 
                  className="mt-1 bg-white text-black border-gray-300" 
                />
              </div>

              {/* Social Media Accounts Heading */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-black mb-4">Social Media Accounts</h3>
              </div>

              {/* Instagram / Twitter */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="instagram" className="text-black">Instagram</Label>
                  <Input 
                    id="instagram" 
                    type="text" 
                    placeholder="Instagram" 
                    className="mt-1 bg-white text-black border-gray-300" 
                  />
                </div>
                <div>
                  <Label htmlFor="twitter" className="text-black">Twitter</Label>
                  <Input 
                    id="twitter" 
                    type="text" 
                    placeholder="Twitter" 
                    className="mt-1 bg-white text-black border-gray-300" 
                  />
                </div>
              </div>

              {/* Facebook / LinkedIn */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="facebook" className="text-black">Facebook</Label>
                  <Input 
                    id="facebook" 
                    type="text" 
                    placeholder="Facebook" 
                    className="mt-1 bg-white text-black border-gray-300" 
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin" className="text-black">LinkedIn</Label>
                  <Input 
                    id="linkedin" 
                    type="text" 
                    placeholder="LinkedIn" 
                    className="mt-1 bg-white text-black border-gray-300" 
                  />
                </div>
              </div>

              {/* Tik Tok / Other */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="tiktok" className="text-black">Tik Tok</Label>
                  <Input 
                    id="tiktok" 
                    type="text" 
                    placeholder="Tik Tok" 
                    className="mt-1 bg-white text-black border-gray-300" 
                  />
                </div>
                <div>
                  <Label htmlFor="other" className="text-black">Other</Label>
                  <Input 
                    id="other" 
                    type="text" 
                    placeholder="Other" 
                    className="mt-1 bg-white text-black border-gray-300" 
                  />
                </div>
              </div>

              {/* Submission Instruction */}
              <p className="text-sm text-gray-600 pt-4">
                Please click the Submit button to complete your application.
              </p>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-gray-700 hover:bg-gray-800 text-white py-6 text-lg font-semibold"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

