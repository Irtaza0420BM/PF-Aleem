import { NewsletterForm } from "./newsletter-form"

export function NewsletterSection() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-bold text-2xl mb-4">Stay In The Loop</h2>
          <p className="text-gray-300 mb-6">Sign up for exclusive offers, original stories, events and more.</p>
          <NewsletterForm />
        </div>
      </div>
    </section>
  )
}
