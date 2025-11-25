import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SponsorshipsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-black">Moment Sponsorships</h1>
          <p className="text-lg text-gray-800 mb-4 max-w-3xl mx-auto leading-relaxed">
            Moment Pickleball is dedicated to advancing pickleball education and competitive play. 
            We seek partnerships that support the growth of the sport and nurture its future. 
            Through sponsoring athletes, leagues, tournaments, and educational initiatives, we're 
            committed to fostering excellence and expanding the pickleball community.
          </p>
          <p className="text-base text-gray-600 mt-6">
            Feel free to reach out to us by using the form below.
          </p>
        </div>

        {/* Contact Form */}
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
  )
}

