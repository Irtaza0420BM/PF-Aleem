import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AboutPage() {
  const qAndA = [
    {
      question: `Moment Pickleball started with a very personal story. When you look at the brand today, what part of your original "why" do you fight the hardest to protect as you grow?`,
      answer: `After COVID, most of us learned what isolation really feels like. I saw it especially in men—more alone than ever, disconnected from friends, as well as work and social teams. I made myself a promise: to be growth-focused, to try to be more than I was the day before. For me, one extension of that was to fully immerse myself in pickleball—not just as a game, but as a place to show up, talk, laugh, and promote inclusivity on the court.

Moment Pickleball is an extension of that commitment. Our products, programs, and partnerships all exist to create meaningful moments of connection, presence, and performance for all levels of players.`
    },
    {
      question: "How did you get into pickleball?",
      answer: `I've spent most of my life chasing speed, pushing limits of traction on skis and a mountain bike—always looking for the next line, the next trail, the next challenge. After COVID, though, I realized I didn't just need another adrenaline hit; I needed a new way to grow.

I came into pickleball very intentionally as a student. I wanted to learn the sport from the ground up, not just to get good at it, but to learn about myself in the process—how I handle frustration, how I connect with others, and how present I'm willing to be point after point.

That mindset is what ultimately led to Moment Pickleball: using the game not just as competition, but as a place to explore who you are when you fully commit to the moment.`
    },
    {
      question: "What inspired you to create Moment Pickleball?",
      answer: "My passion for pickleball and a desire to help others enjoy and improve their game."
    },
    {
      question: "What sets Moment Pickleball apart from other pickleball brands?",
      answer: "Our focus on combining skill development with mind-body wellness principles to create a holistic pickleball experience."
    },
    {
      question: "How does Moment Pickleball support the community?",
      answer: "Through our ambassador program, social channels, and partnerships like Moment Connects, which fosters connection, inclusivity, and mental well-being in collaboration with local NAMI chapters."
    },
    {
      question: `You talk a lot about being "in the moment" on the court. How do you translate that philosophy into product design?`,
      answer: `For me, being "in the moment" is the opposite of overthinking. So when we design gear, I'm always asking: Will this help players feel more confident on the court?

Our job is to remove friction so players can focus on the rally, the strategy, and the joy of the game—not on whether their equipment will cooperate.`
    },
    {
      question: `Many companies claim their gear is "high performance." What specific problems were you trying to solve—and how do you know it's working?`,
      answer: `Most players don't need a magic paddle; they need tools that make practice more efficient and repeatable. We're trying to improve three things: consistency, confidence, and clarity.

We design gear that helps players feel good contact and clean mechanics, then we test with coaches and real players at different levels. When players come back and say, "I finally understand what a good swing should feel like," or coaches tell us their athletes are more confident in their strokes, that's how we know it's working.`
    },
    {
      question: `If a player only had 15 minutes with your training gear before a big match, how should they use it?`,
      answer: `I'd have them focus on rhythm and contact—not cramming in new technique.

Start with a short visualization of playing calm, well-paced pickleball, not "hero" pickleball. Then run a structured warm-up with clean dinks, a few solid drives, and controlled volleys to wake up timing and touch. The goal is to reconnect with your best game so you walk on court feeling tuned-in, not frantic.`
    },
    {
      question: `PickleFlow Mindset Training is a 6-week program. What changes do you see between week one and week six?`,
      answer: `Week one is often full of self-doubt: "I choke in big points," "I'm not mentally tough." By week six, I hear things like, "I know how to reset myself," or "I lost the game, but I'm proud of how I competed." That shift in language is huge.

On the scoreboard, players see more consistent performances—fewer emotional crashes, better decisions under pressure, and more matches where they walk away knowing they played their game. The wins matter, but the way they compete starts to matter even more.`
    },
    {
      question: `Flow can sound like a buzzword. What's one misconception you'd like players to drop?`,
      answer: `The biggest misconception is that flow is a rare, magical state that just "shows up" on a good day. That mindset makes players passive.

Instead, I want them to focus on building the conditions for flow: clear goals, the right level of challenge, good preparation, and simple but repeatable skills they've developed and can choose from during a game. Flow isn't luck—when you're taught how to create those conditions and you practice them, it starts to show up more often.`
    },
    {
      question: `You've coached athletes beyond pickleball. What patterns do you see around confidence and pressure across sports?`,
      answer: `The script is remarkably similar: "I'm great in practice but tighten up when it counts." Underneath that is usually a fear of judgment or not being respected by our peers. More often than not, athletes are more bothered by the idea of their teammates or friends beating them than by losing to strangers.

Successful athletes don't eliminate fear, and they don't waste energy trying to control whether their friends beat them. Instead, they stop letting those narratives drive the bus. They develop tools and language for pressure moments and choose behaviors that align with who they want to be as competitors.`
    },
    {
      question: `When you're coaching mindset, what's the shift that tells you an athlete's relationship to pressure has changed?`,
      answer: `It's the moment they recognize their Inner Opponent—that critical voice we all have—and stop letting it run the show.

Instead of asking, "What if I blow it?" they start asking, "How do I want to show up here?" That shift from fear-based thinking to intentional thinking changes everything. They still hear the Inner Opponent, but they learn to turn the volume down. They define success by their behaviors—how they breathe, how they respond after mistakes, how present they stay—rather than just by the outcome. Over time, that voice doesn't disappear, but it loses its power.`
    },
    {
      question: `What have the CU Pickleball student-athletes taught you about the future of the sport?`,
      answer: `They've shown me that pickleball doesn't have to choose between being competitive and being inclusive—you can be both.

They care about training and results, but they also care deeply about community and making new players feel welcome. If more college programs follow that model, the sport's future will be serious competition built on connection, not just the win–loss column.`
    },
    {
      question: `How are you using the CU partnership to experiment with new ideas?`,
      answer: `CU is a live lab for us. We test formats like "Beat the Buffs," pilot mindset tools, and gather unfiltered feedback on our gear and training concepts.

The constant question we're asking is: What actually helps these players grow, and how can we scale it? If it works with committed student-athletes who are juggling school, training, and life, there's a good chance it can work for a lot of other players and programs.`
    },
    {
      question: `With pickleball exploding, what is the sport at risk of losing—and how is Moment trying to shape the culture?`,
      answer: `Rapid growth always risks more ego, exclusivity, and "us vs. them" thinking. I don't want pickleball to lose the friendliness and accessibility that made it special in the first place.

At Moment, we're intentional about our events, partnerships, and messaging. We absolutely want high-level play—but we also want open arms and a culture where everyone belongs, even at different skill levels. That's why we work with college teams, community programs, and mental health organizations to help keep the culture competitive, respectful, and inclusive.`
    },
    {
      question: `Five years from now, what would make you say, "Moment Pickleball truly changed how people relate to themselves through sport"?`,
      answer: `If there are thousands of stories like, "Pickleball helped me through something," or "I found confidence and community I didn't know I needed," then we've done our job.

I don't just want Moment to be known for great products. I want it to be known as a catalyst—for better performance, deeper connection, and healthier inner conversations, as well as a springboard for more ambitious pickleball projects and initiatives that help more people connect with each other through this sport. If we can do that, Moment Pickleball will have been far more than just a brand.`
    }
  ]

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center text-yellow-400">About Moment Pickleball</h1>

          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              Moment Pickleball was created with a mission to enhance training and elevate gameplay by providing
              innovative products that seamlessly combine skill development with the joy of pickleball.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-yellow-400">Our Story</h2>
            <p className="text-lg leading-relaxed mb-6">
              Founded by passionate pickleball players, we recognized a gap in the market for training equipment that
              not only improves skills but also keeps the fun alive. Our innovative approach combines mind-body wellness
              principles with competitive gameplay to create a holistic pickleball experience.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-yellow-400">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-6">
              We're dedicated to serving all players—from beginners taking their first steps onto the court to
              competitive athletes seeking that extra edge. Every product we create is designed with intention, quality,
              and the player's growth in mind.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-yellow-400">Community First</h2>
            <p className="text-lg leading-relaxed mb-6">
              Beyond products, we're building a vibrant community of pickleball enthusiasts who share our passion for
              the sport. Through our ambassador program, social channels, and events, we're creating connections that
              extend beyond the court.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-black">Make Every Moment Count</h2>
          <p className="text-lg text-center mb-12 max-w-4xl mx-auto leading-relaxed text-gray-900 font-medium">
            We believe pickleball is more than just a game—it's about the people you meet, the confidence you build, and the joy you find in every rally. Whether you're training hard, connecting with community, or just having fun, we're here to help you make the most of every moment on and off the court.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-black text-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow min-h-[350px]">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MB%20Logo-01-FJKt9R3hUAXHwXnCS228xtrt4Szf6V.png"
                    alt="Moment Pickleball Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="96px"
                  />
                </div>
                <h3 className="text-lg font-bold text-white text-center">Innovative Training Gear</h3>
                <p className="text-sm leading-relaxed text-center">
                  High-performance paddles, balls, and training tools engineered to sharpen your skills, boost consistency, and make every session on court more productive—and more fun.
                </p>
              </div>
            </div>
            <div className="bg-black text-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow min-h-[350px]">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-40 h-24 flex-shrink-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PF%20yellow%20and%20White-rhJ4kCfnSDI6QcFGcPNnWQFdCadbd2.png"
                    alt="PickleFlow Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="160px"
                  />
                </div>
                <h3 className="text-lg font-bold text-white text-center">PickleFlow Mindset Training</h3>
                <p className="text-sm leading-relaxed text-center">
                  A 6-week, science-backed coaching program that trains your mind like a muscle. You'll learn to access the flow state more consistently, play your best under pressure, and turn nerves into focused confidence—on and off the court.
                </p>
              </div>
            </div>
            <div className="bg-black text-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow min-h-[350px]">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moment%20Connects%20Logo%201.25-qRjDK6d3f0vYn9rH6bcrru9m4ZAaFM.png"
                    alt="Moment Connects Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="96px"
                  />
                </div>
                <h3 className="text-lg font-bold text-white text-center">Moment Connects</h3>
                <p className="text-sm leading-relaxed text-center">
                  A community-based program that uses the social and physical benefits of pickleball to foster connection, inclusivity, and mental well-being—in partnership with local NAMI chapters.
                </p>
              </div>
            </div>
            <div className="bg-black text-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow min-h-[350px]">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CU_Pickleball_Logo_Final-0uidLeJrg70UrsG6sNDqdjdfeEeUyI.png"
                    alt="CU Pickleball Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="96px"
                  />
                </div>
                <h3 className="text-lg font-bold text-white text-center">CU Pickleball Partnership</h3>
                <p className="text-sm leading-relaxed text-center">
                  Proud partner of the University of Colorado Boulder Pickleball Team, working together on events, player development, and campus initiatives that grow the game and support student-athletes on and off the court.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="founder-qa" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">In the Moment</h2>
              <p className="text-2xl md:text-3xl text-white font-medium">Q&A with Founder Scott Weiss</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {qAndA.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-yellow-400 rounded-lg px-6 hover:border-yellow-300 transition-colors bg-gray-900"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-yellow-400 py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pb-6 whitespace-pre-line">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
