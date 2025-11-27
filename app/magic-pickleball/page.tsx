"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Users,
  Gift,
  Camera,
  TreePine,
  Snowflake,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function MagicPickleballPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const lifestyleImages = [
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6746.JPG-uxt1rPWA8LeCs74cKXUCEQYmGa7uem.jpeg",
      alt: "Player displaying Magic Pickleball packaging",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6743.JPG-1bnA9qoZXsEFTjcpOsCj9FSeA66IzI.jpeg",
      alt: "Excited player with Magic Pickleball",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6740.JPG-vt0jJD5JHNtsN2XBi5sPjeplQP6Pn0.jpeg",
      alt: "Player holding Magic Pickleball box",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6739.JPG-rWKwy5tQCfZcTeSoeYdm9C5iLeVeCF.jpeg",
      alt: "Player amazed by Magic Pickleball",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6736.JPG-O2gDs1yCOocvIZY1oG5TJg0NuO16Wa.jpeg",
      alt: "Player with Magic Pickleball package",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % lifestyleImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [lifestyleImages.length]);

  return (
    <div className="bg-white">
      <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
        {/* Christmas badge */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-[#fdfe06] text-black px-6 py-2 rounded-full font-bold text-sm md:text-base shadow-lg flex items-center gap-2">
            <TreePine className="w-5 h-5" />
            PERFECT CHRISTMAS GIFT
            <Gift className="w-5 h-5" />
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Snowflake className="absolute top-20 left-[10%] w-8 h-8 text-yellow-400 animate-pulse" />
          <Snowflake className="absolute top-[15%] right-[12%] w-6 h-6 text-yellow-400 animate-pulse delay-100" />
          <Snowflake className="absolute bottom-32 left-[25%] w-7 h-7 text-yellow-400 animate-pulse delay-200" />
          <div className="absolute top-[25%] right-[25%] text-yellow-400 text-3xl animate-pulse delay-200">
            ✦
          </div>
          <div className="absolute top-[70%] left-[40%] text-yellow-400 text-2xl animate-pulse">
            ⭐
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-left space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-balance">
                A Magically Picklicious Holiday!
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-[#fdfe06]">
                Are you game to serve up some whimsy wisdom?
              </p>
              <p className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed">
                A playful fortune-telling pickleball that sparks laughter,
                breaks the ice, and adds magic to every game and gathering.
              </p>
              <div className="bg-yellow-400/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#fdfe06]">
                <p className="text-lg font-bold text-[#fdfe06]">
                  The PERFECT stocking stuffer—order now before they're gone!
                </p>
              </div>
              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#fdfe06] hover:bg-[#e7e805] text-black font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="#buy">
                    Get The Perfect Christmas Gift—Shop Now!
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto max-w-lg aspect-square">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_Shortened_POV-wrYYFQAZPBMOZbQFX9sUECfnaFmHBt.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-yellow-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-[#fdfe06] text-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold">
              The #1 Pickleball Gift This Christmas Season
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                See The Magic in Action
              </h2>
              <p className="text-xl text-gray-600">
                Real players, real fun, real magic
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-black shadow-lg">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_Shortened_ShakeforMagic-gZK3m49Y0zZJ2IbkbFu4GpsLDLLUGr.MOV"
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-black shadow-lg">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_Shortened_Resolutions-ddXVd3OodymadZjotbcPPQ38G7lxZ7.mp4"
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-black shadow-lg">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_Shortened_OrderNow-BZye4tlmkhOVV81HTxi4uuVxVUkf8z.MOV"
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
              What Is The Magic Pickleball?
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-2xl font-bold text-black text-center">
                Think of it as a Magic 8 Ball with a whole new spin—literally.
              </p>
              <p>
                The Magic Pickleball is a neon-yellow, game-ready pickleball
                with a hidden message window built right in. Ask it a question,
                give it a playful shake, and one of 20 cheeky,
                pickleball-inspired answers will spin into view.
              </p>
              <p>
                It's part conversation spark, part courtside oracle, and all
                about fun. Use it to decide who serves, call out playful "fates"
                before a rally, or keep the laughs rolling after the last game.
              </p>
              <p className="font-bold text-black text-xl text-center">
                Whenever it comes out of the bag, The Magic Pickleball turns
                ordinary play into a little bit of pickleball magic. ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                The Joy Is Real, The Smiles Are Magic
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Watch faces light up when The Magic Pickleball makes an
                appearance. From kids to pros, everyone wants to know what it'll
                say next.
              </p>
            </div>

            {/* Carousel */}
            <div className="relative max-w-4xl mx-auto mb-12">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl bg-white border-4 border-[#fdfe06]">
                {lifestyleImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {lifestyleImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-[#fdfe06] w-10"
                        : "bg-gray-300 hover:bg-gray-400 w-3"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Call-out boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-gray-100">
                <div className="text-5xl mb-4">😂</div>
                <h3 className="font-bold text-black text-xl mb-2">
                  Instant Laughter
                </h3>
                <p className="text-gray-600">
                  Every shake sparks giggles and good vibes
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-gray-100">
                <div className="text-5xl mb-4">📸</div>
                <h3 className="font-bold text-black text-xl mb-2">
                  Social Gold
                </h3>
                <p className="text-gray-600">
                  Perfect for photos, videos, and viral moments
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-gray-100">
                <div className="text-5xl mb-4">🎁</div>
                <h3 className="font-bold text-black text-xl mb-2">
                  Gift-Ready Fun
                </h3>
                <p className="text-gray-600">
                  Everyone wants one after they see it in action
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-6">
              Perfect For...
            </h2>
            <p className="text-center text-gray-600 mb-12 text-xl">
              From Christmas parties to everyday play—celebrate the season!
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "🎄 Christmas Parties",
                "🎁 Secret Santa",
                "🧦 Stocking Stuffers",
                "🎅 White Elephant",
                "❄️ Winter Leagues",
                "🎊 New Year's Play",
                "⛄ Holiday Tournaments",
                "🎀 Gift Exchanges",
                "👨‍👩‍👧‍👦 Family Gatherings",
                "🎉 Birthday Parties",
                "👫 Couples Nights",
                "🌟 Open Play Sessions",
                "🥒 Post-Game Pickle Juice Shots",
                "🏓 Kitchen Line Arguments",
                "🎯 Dink Battle Showdowns",
                "⚡ Failed Erne Celebrations",
                "🔥 Third Shot Drop Disasters",
                "🎪 4.0 Rec Drama",
                "💪 Banger Intervention Sessions",
                "🦅 Around-The-Post Attempts",
                "🧘 Pre-Tournament Rituals",
                "🎾 Paddle Upgrade Decisions",
                "🥵 Summer Heat Hydration Breaks",
                "🏆 Partner Rotation Anxiety",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-gray-50 rounded-xl px-4 py-4 text-center font-semibold text-gray-800 shadow-sm hover:shadow-md transition-all border-2 border-gray-200 hover:border-yellow-400"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="buy" className="py-20 md:py-28 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-[#fdfe06] text-black px-6 py-2 rounded-full font-bold text-sm mb-6">
                ORDER NOW FOR CHRISTMAS DELIVERY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get Your Magic Pickleball
              </h2>
              <p className="text-xl text-gray-300">
                The gift that keeps on giving—all season long!
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border-2 border-[#fdfe06]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/335A4267.png-Yxi8zsR80I7F7tSz01WSolIXYEEuWL.jpeg"
                    alt="Magic Pickleball packaging"
                    width={500}
                    height={500}
                    className="rounded-2xl w-full h-auto"
                  />
                </div>
                <div className="space-y-8">
                  <div>
                    <p className="text-6xl font-bold mb-2 text-[#fdfe06]">
                      $24.99
                    </p>
                    <p className="text-[#fdfe06] font-bold text-lg">
                      Limited Christmas Stock Available!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[#fdfe06] text-2xl flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-lg">
                        20 hilarious pickleball-themed answers
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#fdfe06] text-2xl flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-lg">
                        Premium quality construction
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#fdfe06] text-2xl flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-lg">
                        Perfect for all ages and skill levels
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#fdfe06] text-2xl flex-shrink-0">
                        🎁
                      </span>
                      <span className="text-lg font-semibold">
                        Gift-ready packaging—no wrapping needed!
                      </span>
                    </div>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#fdfe06] hover:bg-yellow-300 text-black font-bold py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
                  >
                    <Link href="/collections/all">
                      Give The Gift of Magic This Christmas!
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#fdfe06] text-black">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Your Pickleball Destiny Awaits
            </h2>
            <p className="text-xl">
              Make this Christmas unforgettable. Get yours today and start
              creating magical moments on and off the court!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-black hover:bg-gray-900 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
            >
              <Link href="/collections/all">
                Order Now For Christmas Delivery!
              </Link>
            </Button>
            <p className="text-sm text-black/70 pt-4">
              Limited Christmas stock • Fast shipping • Gift-ready packaging •
              100% pickleball magic guaranteed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
