// import { getCollectionProducts, getProduct } from "@/lib/shopify"
// import { ProductCard } from "@/components/product-card"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Gift, Target, Users, Zap } from 'lucide-react'
// import Image from "next/image"

// export default async function Home() {
//   const products = await getCollectionProducts({ 
//     collection: 'training-playing-products',
//     limit: 6 
//   })

//   const [magicPickleball, ...giftGuideProducts] = await Promise.all([
//     getProduct('magic-pickleball'), // Magic Pickleball by handle
//     getCollectionProducts({ collection: 'bundles', limit: 1 }), // Balance Board
//     getCollectionProducts({ collection: 'training-playing-products', limit: 2 }), // MW-PRO Bag & Mini Paddle
//     getCollectionProducts({ collection: 'hoodies', limit: 2 }), // Two hoodies
//   ])

//   const flatGiftProducts = giftGuideProducts.flat().slice(0, 4) // Get 4 products for other items

//   return (
//     <div className="bg-gray-900">
//       <section className="relative min-h-[600px] bg-gradient-to-br from-black via-gray-900 to-yellow-500">
//         <div className="container mx-auto px-4 py-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             {/* Left side - Hero Carousel */}
//             <div className="space-y-4">
//               <div className="relative h-[600px] rounded-lg overflow-hidden border-4 border-yellow-400 shadow-2xl aspect-[3/4]">
//                 <div className="hero-carousel">
//                   <Image
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PickleBall_Pack_03-FKHiiHQWkSOZOX2u0Qs317gJyoHHvj.jpg"
//                     alt="Player with Moment Pickleball backpack on court"
//                     fill
//                     className="object-cover hero-image"
//                     priority
//                   />
//                   <Image
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pickleball_Action_2048_08-pJ0yLUlWbW1oKH5XQcXldo00aBpQZb.jpg"
//                     alt="Player with Moment gear and paddle"
//                     fill
//                     className="object-cover hero-image"
//                   />
//                   <Image
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pickleball_Action_2048_29-EBWz3lBFS7SXozEggQMylpC88PPlQe.jpg"
//                     alt="Action shot of player during gameplay"
//                     fill
//                     className="object-cover hero-image"
//                   />
//                   <Image
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PickleBall_Pack_10-JDZX6i64twaXZPBtADSbFRRQFvaIsv.jpg"
//                     alt="Player wearing Moment backpack"
//                     fill
//                     className="object-cover hero-image"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Right side - Copy */}
//             <div className="text-left">
//               <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-white drop-shadow-2xl">Your Moment Awaits</h1>
//               <p className="text-lg md:text-xl text-gray-100 mb-4 text-pretty leading-relaxed drop-shadow-lg">
//                 Moment Pickleball was founded with a passion for the sport and a desire to enhance the training experience
//                 for players of all skill levels.
//               </p>
//               <p className="text-base md:text-lg text-gray-200 mb-8 text-pretty leading-relaxed drop-shadow-lg">
//                 As active players and competitors, we recognize the need for high-quality training products that could help
//                 players improve their game effectively and enjoyably. With our expertise and dedication, we embarked on a
//                 journey to develop innovative products that help the training needs of all pickleball players.
//               </p>
//               <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg shadow-2xl">
//                 <Link href="/collections/all">Shop Now</Link>
//               </Button>
//             </div>
//           </div>
          
//           <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
//             <div className="relative h-32 rounded-md overflow-hidden border-2 border-yellow-400 hover:border-yellow-300 transition-colors cursor-pointer">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-1-2Gkd8IELF0zVYlGc4UkmWfFt2wJr49.jpg"
//                 alt="Inside view of organized backpack"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="relative h-32 rounded-md overflow-hidden border-2 border-yellow-400 hover:border-yellow-300 transition-colors cursor-pointer">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-yZVoHdHw9Zr0CpxUhTbXyenQbZ2zNN.jpg"
//                 alt="Moment backpack with full gear setup"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="relative h-32 rounded-md overflow-hidden border-2 border-yellow-400 hover:border-yellow-300 transition-colors cursor-pointer">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PickleBall_Pack_11-pptyXq1O1miAb1388VaFIMJYlH54o3.jpg"
//                 alt="Player organizing backpack on court"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="relative h-32 rounded-md overflow-hidden border-2 border-yellow-400 hover:border-yellow-300 transition-colors cursor-pointer">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PickleBall_Pack_09-OgzeJVFdCHqkyNjyvl3i0cOZu1LVZO.jpg"
//                 alt="Player wearing Moment backpack"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="relative h-32 rounded-md overflow-hidden border-2 border-yellow-400 hover:border-yellow-300 transition-colors cursor-pointer">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PickleBall_Pack_10-JDZX6i64twaXZPBtADSbFRRQFvaIsv.jpg"
//                 alt="Backpack with Moment branding"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="relative h-32 rounded-md overflow-hidden border-2 border-yellow-400 hover:border-yellow-300 transition-colors cursor-pointer">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pickleball_Action_2048_08-pJ0yLUlWbW1oKH5XQcXldo00aBpQZb.jpg"
//                 alt="Player with Moment gear"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="relative h-32 rounded-md overflow-hidden border-2 border-yellow-400 hover:border-yellow-300 transition-colors cursor-pointer">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pickleball_Action_2048_29-EBWz3lBFS7SXozEggQMylpC88PPlQe.jpg"
//                 alt="Action gameplay shot"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="relative h-32 rounded-md overflow-hidden border-2 border-yellow-400 hover:border-yellow-300 transition-colors cursor-pointer">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PickleBall_Pack_03-FKHiiHQWkSOZOX2u0Qs317gJyoHHvj.jpg"
//                 alt="Player on orange court"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="container mx-auto px-4 py-16 bg-gray-900">
//         <div className="text-center mb-8">
//           <h2 className="text-4xl font-bold mb-4 text-white">Featured Products</h2>
//           <Button asChild variant="outline" className="border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent text-white font-bold">
//             <Link href="/collections/all">View All</Link>
//           </Button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       <section className="py-20 bg-yellow-400">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-black">Make Every Moment Count</h2>
//           <p className="text-lg text-center mb-12 max-w-4xl mx-auto leading-relaxed text-gray-900 font-medium">
//             We believe pickleball is more than just a game—it's about the people you meet, the confidence you build, and the joy you find in every rally. Whether you're training hard, connecting with community, or just having fun, we're here to help you make the most of every moment on and off the court.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//             <div className="bg-black text-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow min-h-[350px]">
//               <div className="flex flex-col items-center gap-4">
//                 <div className="relative w-24 h-24 flex-shrink-0">
//                   <Image
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MB%20Logo-01-FJKt9R3hUAXHwXnCS228xtrt4Szf6V.png"
//                     alt="Moment Pickleball Logo"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//                 <h3 className="text-lg font-bold text-white text-center">Innovative Training Gear</h3>
//                 <p className="text-sm leading-relaxed text-center">
//                   High-performance paddles, balls, and training tools engineered to sharpen your skills, boost consistency, and make every session on court more productive—and more fun.
//                 </p>
//               </div>
//             </div>
//             <div className="bg-black text-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow min-h-[350px]">
//               <div className="flex flex-col items-center gap-4">
//                 <div className="relative w-40 h-24 flex-shrink-0">
//                   <Image
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PF%20yellow%20and%20White-rhJ4kCfnSDI6QcFGcPNnWQFdCadbd2.png"
//                     alt="PickleFlow Logo"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//                 <h3 className="text-lg font-bold text-white text-center">PickleFlow Mindset Training</h3>
//                 <p className="text-sm leading-relaxed text-center">
//                   A 6-week, science-backed coaching program that trains your mind like a muscle. You'll learn to access the flow state more consistently, play your best under pressure, and turn nerves into focused confidence—on and off the court.
//                 </p>
//               </div>
//             </div>
//             <div className="bg-black text-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow min-h-[350px]">
//               <div className="flex flex-col items-center gap-4">
//                 <div className="relative w-24 h-24 flex-shrink-0">
//                   <Image
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moment%20Connects%20Logo%201.25-qRjDK6d3f0vYn9rH6bcrru9m4ZAaFM.png"
//                     alt="Moment Connects Logo"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//                 <h3 className="text-lg font-bold text-white text-center">Moment Connects</h3>
//                 <p className="text-sm leading-relaxed text-center">
//                   A community-based program that uses the social and physical benefits of pickleball to foster connection, inclusivity, and mental well-being—in partnership with local NAMI chapters.
//                 </p>
//               </div>
//             </div>
//             <div className="bg-black text-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow min-h-[350px]">
//               <div className="flex flex-col items-center gap-4">
//                 <div className="relative w-24 h-24 flex-shrink-0">
//                   <Image
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CU_Pickleball_Logo_Final-0uidLeJrg70UrsG6sNDqdjdfeEeUyI.png"
//                     alt="CU Pickleball Logo"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//                 <h3 className="text-lg font-bold text-white text-center">CU Pickleball Partnership</h3>
//                 <p className="text-sm leading-relaxed text-center">
//                   Proud partner of the University of Colorado Boulder Pickleball Team, working together on events, player development, and campus initiatives that grow the game and support student-athletes on and off the court.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="text-center mt-12">
//             <Button asChild size="lg" className="bg-black hover:bg-gray-900 text-yellow-400 font-bold px-8 py-6 text-lg shadow-2xl">
//               <Link href="/pages/about-scott-weiss">Meet Our Founder</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       <section className="bg-gradient-to-r from-red-600 via-green-600 to-red-600 py-8 border-y-4 border-yellow-400">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-6">
//             <div className="inline-block p-2 bg-white rounded-full shadow-xl mb-3">
//               <Gift className="w-6 h-6 text-red-600" />
//             </div>
//             <h2 className="text-2xl font-bold mb-3 text-white drop-shadow-lg">Holiday Gift Guide</h2>
//             <p className="text-base text-white mb-4 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg">
//               Find the perfect gift for the pickleball enthusiast in your life. From training tools to festive fun, we
//               have something for every player.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 max-w-5xl mx-auto">
//             {/* Magic Pickleball - Featured First */}
//             {magicPickleball && (
//               <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
//                 <ProductCard product={magicPickleball} />
//               </div>
//             )}
            
//             {/* Display fetched products */}
//             {flatGiftProducts.map((product) => (
//               <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
//             <Button asChild size="default" className="bg-white hover:bg-gray-100 text-red-600 font-bold shadow-xl">
//               <Link href="/collections/all">Shop All Gifts</Link>
//             </Button>
//             <Button
//               asChild
//               size="default"
//               className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold shadow-xl"
//             >
//               <Link href="/magic-pickleball">Discover The Magic Pickleball</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       <section className="bg-black text-white py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400 text-balance">
//             The Ultimate Pickleball Fun And Fortune Awaits!
//           </h2>
//           <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
//             Experience the magic with our revolutionary pickleball that brings excitement, laughter, and fortune-telling
//             fun to every game
//           </p>
          
//           <div className="max-w-xl mx-auto mb-8">
//             <video
//               className="w-full rounded-lg shadow-2xl"
//               autoPlay
//               loop
//               muted
//               playsInline
//             >
//               <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_Shortened_POV-wrYYFQAZPBMOZbQFX9sUECfnaFmHBt.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
          
//           <Button
//             asChild
//             size="lg"
//             className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg"
//           >
//             <Link href="/magic-pickleball">Discover The Magic Pickleball</Link>
//           </Button>
//         </div>
//       </section>
//     </div>
//   )
// }




import { getCollectionProducts, getProduct } from "@/lib/shopify"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gift, Target, Users, Zap } from 'lucide-react'
import Image from "next/image"

export default async function Home() {
  const products = await getCollectionProducts({ 
    collection: 'training-playing-products',
    limit: 6 
  })

  const [magicPickleball, ...giftGuideProducts] = await Promise.all([
    getProduct('magic-pickleball'), // Magic Pickleball by handle
    getCollectionProducts({ collection: 'bundles', limit: 1 }), // Balance Board
    getCollectionProducts({ collection: 'training-playing-products', limit: 2 }), // MW-PRO Bag & Mini Paddle
    getCollectionProducts({ collection: 'hoodies', limit: 2 }), // Two hoodies
  ])

  const flatGiftProducts = giftGuideProducts.flat().slice(0, 4) // Get 4 products for other items

  return (
    <div className="bg-gray-900">
      <section className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] bg-gradient-to-br from-black via-gray-900 to-yellow-500">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left side - Hero Carousel */}
            <div className="space-y-3 sm:space-y-4 flex justify-center md:justify-start">
              <div className="relative h-[350px] sm:h-[400px] md:h-[480px] lg:h-[550px] xl:h-[600px] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-full rounded-lg overflow-hidden border-2 sm:border-3 md:border-4 border-yellow-400 shadow-2xl aspect-[3/4]">
                <div className="hero-carousel">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PickleBall_Pack_03-FKHiiHQWkSOZOX2u0Qs317gJyoHHvj.jpg"
                    alt="Player with Moment Pickleball backpack on court"
                    fill
                    className="object-cover hero-image"
                    priority
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pickleball_Action_2048_08-pJ0yLUlWbW1oKH5XQcXldo00aBpQZb.jpg"
                    alt="Player with Moment gear and paddle"
                    fill
                    className="object-cover hero-image"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pickleball_Action_2048_29-EBWz3lBFS7SXozEggQMylpC88PPlQe.jpg"
                    alt="Action shot of player during gameplay"
                    fill
                    className="object-cover hero-image"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PickleBall_Pack_10-JDZX6i64twaXZPBtADSbFRRQFvaIsv.jpg"
                    alt="Player wearing Moment backpack"
                    fill
                    className="object-cover hero-image"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Copy */}
            <div className="text-left px-2 sm:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-balance text-white drop-shadow-2xl leading-tight">Your Moment Awaits</h1>
              <p className="text-sm sm:text-[15px] md:text-base lg:text-lg xl:text-xl text-gray-100 mb-2 sm:mb-3 md:mb-3.5 lg:mb-4 text-pretty leading-relaxed drop-shadow-lg">
                Moment Pickleball was founded with a passion for the sport and a desire to enhance the training experience
                for players of all skill levels.
              </p>
              <p className="text-xs sm:text-[13px] md:text-sm lg:text-base xl:text-lg text-gray-200 mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-pretty leading-relaxed drop-shadow-lg">
                As active players and competitors, we recognize the need for high-quality training products that could help
                players improve their game effectively and enjoyably. With our expertise and dedication, we embarked on a
                journey to develop innovative products that help the training needs of all pickleball players.
              </p>
              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 sm:px-5 md:px-6 lg:px-8 py-3.5 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-[15px] md:text-base lg:text-lg shadow-2xl w-full sm:w-auto">
                <Link href="/collections/all">Shop Now</Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 md:mt-12 grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
            <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 rounded-md overflow-hidden border border-yellow-400 sm:border-2 hover:border-yellow-300 transition-colors cursor-pointer">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-1-2Gkd8IELF0zVYlGc4UkmWfFt2wJr49.jpg"
                alt="Inside view of organized backpack"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 rounded-md overflow-hidden border border-yellow-400 sm:border-2 hover:border-yellow-300 transition-colors cursor-pointer">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-yZVoHdHw9Zr0CpxUhTbXyenQbZ2zNN.jpg"
                alt="Moment backpack with full gear setup"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 rounded-md overflow-hidden border border-yellow-400 sm:border-2 hover:border-yellow-300 transition-colors cursor-pointer">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PickleBall_Pack_11-pptyXq1O1miAb1388VaFIMJYlH54o3.jpg"
                alt="Player organizing backpack on court"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 rounded-md overflow-hidden border border-yellow-400 sm:border-2 hover:border-yellow-300 transition-colors cursor-pointer">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PickleBall_Pack_09-OgzeJVFdCHqkyNjyvl3i0cOZu1LVZO.jpg"
                alt="Player wearing Moment backpack"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 rounded-md overflow-hidden border border-yellow-400 sm:border-2 hover:border-yellow-300 transition-colors cursor-pointer">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PickleBall_Pack_10-JDZX6i64twaXZPBtADSbFRRQFvaIsv.jpg"
                alt="Backpack with Moment branding"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 rounded-md overflow-hidden border border-yellow-400 sm:border-2 hover:border-yellow-300 transition-colors cursor-pointer">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pickleball_Action_2048_08-pJ0yLUlWbW1oKH5XQcXldo00aBpQZb.jpg"
                alt="Player with Moment gear"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 rounded-md overflow-hidden border border-yellow-400 sm:border-2 hover:border-yellow-300 transition-colors cursor-pointer">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pickleball_Action_2048_29-EBWz3lBFS7SXozEggQMylpC88PPlQe.jpg"
                alt="Action gameplay shot"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 rounded-md overflow-hidden border border-yellow-400 sm:border-2 hover:border-yellow-300 transition-colors cursor-pointer">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PickleBall_Pack_03-FKHiiHQWkSOZOX2u0Qs317gJyoHHvj.jpg"
                alt="Player on orange court"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 bg-gray-900">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">Featured Products</h2>
          <Button asChild variant="outline" className="border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent text-white font-bold text-sm sm:text-base">
            <Link href="/collections/all">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-yellow-400">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-center text-black">Make Every Moment Count</h2>
          <p className="text-sm sm:text-base md:text-lg text-center mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed text-gray-900 font-medium px-2">
            We believe pickleball is more than just a game—it's about the people you meet, the confidence you build, and the joy you find in every rally. Whether you're training hard, connecting with community, or just having fun, we're here to help you make the most of every moment on and off the court.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
            <div className="bg-black text-white rounded-lg p-4 sm:p-5 md:p-6 shadow-xl hover:shadow-2xl transition-shadow min-h-[280px] sm:min-h-[320px] md:min-h-[350px]">
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MB%20Logo-01-FJKt9R3hUAXHwXnCS228xtrt4Szf6V.png"
                    alt="Moment Pickleball Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white text-center">Innovative Training Gear</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-center">
                  High-performance paddles, balls, and training tools engineered to sharpen your skills, boost consistency, and make every session on court more productive—and more fun.
                </p>
              </div>
            </div>
            <div className="bg-black text-white rounded-lg p-4 sm:p-5 md:p-6 shadow-xl hover:shadow-2xl transition-shadow min-h-[280px] sm:min-h-[320px] md:min-h-[350px]">
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <div className="relative w-28 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex-shrink-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PF%20yellow%20and%20White-rhJ4kCfnSDI6QcFGcPNnWQFdCadbd2.png"
                    alt="PickleFlow Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white text-center">PickleFlow Mindset Training</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-center">
                  A 6-week, science-backed coaching program that trains your mind like a muscle. You'll learn to access the flow state more consistently, play your best under pressure, and turn nerves into focused confidence—on and off the court.
                </p>
              </div>
            </div>
            <div className="bg-black text-white rounded-lg p-4 sm:p-5 md:p-6 shadow-xl hover:shadow-2xl transition-shadow min-h-[280px] sm:min-h-[320px] md:min-h-[350px]">
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moment%20Connects%20Logo%201.25-qRjDK6d3f0vYn9rH6bcrru9m4ZAaFM.png"
                    alt="Moment Connects Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white text-center">Moment Connects</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-center">
                  A community-based program that uses the social and physical benefits of pickleball to foster connection, inclusivity, and mental well-being—in partnership with local NAMI chapters.
                </p>
              </div>
            </div>
            <div className="bg-black text-white rounded-lg p-4 sm:p-5 md:p-6 shadow-xl hover:shadow-2xl transition-shadow min-h-[280px] sm:min-h-[320px] md:min-h-[350px]">
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CU_Pickleball_Logo_Final-0uidLeJrg70UrsG6sNDqdjdfeEeUyI.png"
                    alt="CU Pickleball Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white text-center">CU Pickleball Partnership</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-center">
                  Proud partner of the University of Colorado Boulder Pickleball Team, working together on events, player development, and campus initiatives that grow the game and support student-athletes on and off the court.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Button asChild size="lg" className="bg-black hover:bg-gray-900 text-yellow-400 font-bold px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg shadow-2xl w-full sm:w-auto">
              <Link href="/pages/about-scott-weiss">Meet Our Founder</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-600 via-green-600 to-red-600 py-6 sm:py-8 border-y-2 sm:border-y-3 md:border-y-4 border-yellow-400">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-4 sm:mb-5 md:mb-6">
            <div className="inline-block p-1.5 sm:p-2 bg-white rounded-full shadow-xl mb-2 sm:mb-3">
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white drop-shadow-lg">Holiday Gift Guide</h2>
            <p className="text-xs sm:text-sm md:text-base text-white mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg px-2">
              Find the perfect gift for the pickleball enthusiast in your life. From training tools to festive fun, we
              have something for every player.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6 max-w-5xl mx-auto">
            {/* Magic Pickleball - Featured First */}
            {magicPickleball && (
              <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <ProductCard product={magicPickleball} />
              </div>
            )}
            
            {/* Display fetched products */}
            {flatGiftProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center">
            <Button asChild size="default" className="bg-white hover:bg-gray-100 text-red-600 font-bold shadow-xl text-sm sm:text-base w-full sm:w-auto">
              <Link href="/collections/all">Shop All Gifts</Link>
            </Button>
            <Button
              asChild
              size="default"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold shadow-xl text-sm sm:text-base w-full sm:w-auto"
            >
              <Link href="/magic-pickleball">Discover The Magic Pickleball</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-yellow-400 text-balance px-2">
            The Ultimate Pickleball Fun And Fortune Awaits!
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-7 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Experience the magic with our revolutionary pickleball that brings excitement, laughter, and fortune-telling
            fun to every game
          </p>
          
          <div className="max-w-xl mx-auto mb-6 sm:mb-7 md:mb-8">
            <video
              className="w-full rounded-lg shadow-2xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_Shortened_POV-wrYYFQAZPBMOZbQFX9sUECfnaFmHBt.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <Button
            asChild
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg w-full sm:w-auto"
          >
            <Link href="/magic-pickleball">Discover The Magic Pickleball</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}