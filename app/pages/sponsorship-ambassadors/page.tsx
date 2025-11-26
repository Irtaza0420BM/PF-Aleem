import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

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
      
      <div className="container mx-auto px-0 lg:px-4 xl:px-8 relative z-10 max-w-[1920px] py-8 lg:py-12 xl:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-4 xl:gap-6 items-center justify-center">
          {/* SPONSORSHIPS Section - Clickable */}
          <Link href="/pages/sponsorships" className="relative h-[70vh] md:h-[75vh] lg:h-[70vh] xl:h-[75vh] block group cursor-pointer">
            <div className="bg-gradient-to-b from-blue-100 to-white relative flex flex-col h-full transition-transform group-hover:scale-[1.02]">
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
              
              {/* Image Container - fills most of the space */}
              <div className="relative flex-1 w-full flex items-center justify-center p-6 md:p-8 lg:p-10 xl:p-12">
                <div className="relative w-full h-full">
                  <Image
                    src="https://momentpickleball.com/cdn/shop/files/Drew_814x_crop_center.jpg?v=1717504160"
                    alt="Sponsorships"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 50vw, 45vw"
                    priority
                  />
                </div>
              </div>
              
              {/* Black Label with Yellow Text and Chevron */}
              <div className="bg-black py-6 md:py-8 px-8 text-center relative z-10 flex items-center justify-center gap-3 flex-shrink-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#fdfe06] uppercase tracking-wide">
                  SPONSORSHIPS
                </h2>
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-gray-400 group-hover:text-[#fdfe06] transition-colors" />
              </div>
            </div>
          </Link>

          {/* AMBASSADORS Section - Clickable */}
          <Link href="/pages/ambassadors" className="relative h-[70vh] md:h-[75vh] lg:h-[70vh] xl:h-[75vh] block group cursor-pointer">
            <div className="bg-gradient-to-b from-blue-100 to-white relative flex flex-col h-full transition-transform group-hover:scale-[1.02]">
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
              
              {/* Image Container - fills most of the space */}
              <div className="relative flex-1 w-full flex items-center justify-center p-6 md:p-8 lg:p-10 xl:p-12">
                <div className="relative w-full h-full">
                  <Image
                    src="https://momentpickleball.com/cdn/shop/files/Hawk_Venek_814x_crop_center.jpg?v=1717504161"
                    alt="Ambassadors"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 50vw, 45vw"
                    priority
                  />
                </div>
              </div>
              
              {/* Black Label with Yellow Text and Chevron */}
              <div className="bg-black py-6 md:py-8 px-8 text-center relative z-10 flex items-center justify-center gap-3 flex-shrink-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#fdfe06] uppercase tracking-wide">
                  AMBASSADORS
                </h2>
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-gray-400 group-hover:text-[#fdfe06] transition-colors" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
