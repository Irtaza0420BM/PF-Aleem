'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect } from "react"

export default function AboutScottWeiss() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      question: `How do you use the playful nature of pickleball to open up tough conversations about mental health?`,
      answer: `Pickleball disarms people—it's fun, it's social, and it's less wrapped in intensity than many other sports. We lean into that.

We focus on playing and meeting others, not on lectures. Then we introduce small openings—a story, a few questions, a gentle introduction to NAMI resources. Once people have been playing for a bit and feel relaxed and connected, conversations about someone's mental health challenges can naturally emerge with our NAMI representative and our Moment Connects ambassadors. It becomes a human conversation, not a heavy seminar.`
    },
    {
      question: `You've coached athletes beyond pickleball. What patterns do you see around confidence and pressure across sports?`,
      answer: `The script is remarkably similar: "I'm great in practice but tighten up when it counts." Underneath that is usually a fear of judgment or not being respected by our peers. More often than not, athletes are more bothered by the idea of their teammates or friends beating them than by losing to strangers.

Successful athletes don't eliminate fear, and they don't waste energy trying to control whether their friends beat them. Instead, they stop letting those narratives drive the bus. They develop tools and language for pressure moments and choose behaviors that align with who they want to be as competitors.`
    },
    {
      question: `When a player says, "I'm great in practice but tighten up in matches," what's your first question?`,
      answer: `I ask, "What are you expecting from yourself in a match that you don't expect in practice?"

That question reveals the hidden rules: perfection, never making "stupid" mistakes, not letting anyone down. Once those rules are visible, we can rewrite them into more realistic and productive expectations. That alone can unlock a lot of performance because it gives players permission to compete freely instead of fearfully.`
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
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-8 text-black hover:text-yellow-400 hover:bg-yellow-50">
            <Link href="/">&larr; Back to Home</Link>
          </Button>
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">In the Moment</h1>
            <p className="text-2xl md:text-3xl text-gray-700 font-medium">Q&A with Founder Scott Weiss</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {qAndA.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 hover:border-yellow-400 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-black hover:text-yellow-400 py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-6 whitespace-pre-line">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black">
              <Link href="/">Explore Moment Pickleball</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
