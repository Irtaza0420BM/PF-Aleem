import Image from "next/image"

export default function SponsorshipAmbassadorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white relative">
      {/* Subtle white grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-0 relative z-10 max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-screen md:h-auto">
          {/* SPONSORSHIPS Section */}
          <div className="relative h-screen md:h-[80vh] lg:h-[85vh] xl:h-[90vh]">
            <div className="bg-gradient-to-b from-blue-100 to-white relative flex flex-col h-full">
              {/* Grid pattern overlay for this section */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />
              
              {/* Image Container - fills the space */}
              <div className="relative flex-1 w-full flex items-center justify-center py-8 lg:py-12 xl:py-16">
                <div className="relative w-full h-full max-w-[600px] lg:max-w-[700px] xl:max-w-[800px]">
                  <Image
                    src="https://momentpickleball.com/cdn/shop/files/Drew_814x_crop_center.jpg?v=1717504160"
                    alt="Sponsorships"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 600px, 800px"
                    priority
                  />
                </div>
              </div>
              
              {/* Black Label with Yellow Text */}
              <div className="bg-black py-6 md:py-8 lg:py-10 xl:py-12 px-8 text-center relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#fdfe06] uppercase tracking-wide">
                  SPONSORSHIPS
                </h2>
              </div>
            </div>
          </div>

          {/* AMBASSADORS Section */}
          <div className="relative h-screen md:h-[80vh] lg:h-[85vh] xl:h-[90vh]">
            <div className="bg-gradient-to-b from-blue-100 to-white relative flex flex-col h-full">
              {/* Grid pattern overlay for this section */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />
              
              {/* Image Container - fills the space */}
              <div className="relative flex-1 w-full flex items-center justify-center py-8 lg:py-12 xl:py-16">
                <div className="relative w-full h-full max-w-[600px] lg:max-w-[700px] xl:max-w-[800px]">
                  <Image
                    src="https://momentpickleball.com/cdn/shop/files/Hawk_Venek_814x_crop_center.jpg?v=1717504161"
                    alt="Ambassadors"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 600px, 800px"
                    priority
                  />
                </div>
              </div>
              
              {/* Black Label with Yellow Text */}
              <div className="bg-black py-6 md:py-8 lg:py-10 xl:py-12 px-8 text-center relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#fdfe06] uppercase tracking-wide">
                  AMBASSADORS
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
