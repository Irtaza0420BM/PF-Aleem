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
      </div>
    </div>
  )
}

