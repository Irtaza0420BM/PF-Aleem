'use client';

import { useState } from 'react';

export default function MomentMindset() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white text-black">
      <h1 className="text-3xl font-bold mb-6">MOMENT PICKLEBALL PERFORMANCE MINDSET PROGRAM</h1>
      <h2 className="text-xl font-semibold mb-6">Where Mindfulness Plays With The Flow State</h2>
      
      <p className="mb-4">
        Mindfulness in pickleball involves a heightened awareness of the present moment. This conscious presence serves as a foundation for entering the flow state—where actions and awareness merge and distractions fade away. While achieving the Flow State not only elevates the game, it also increases our enjoyment of Pickleball. But at the same time, we can be pulled from the Flow State when a ball is mis-hit or a winner passes us by. While we experience a profound connection with this sport, sometimes a poor decision, poor hit, or losing a point can cause a very intense response from our inner self. How we deal with these moments can influence the next point, the game, our day... even our relationships on and off the court.
      </p>

      <p className="mb-4">
        What if we can cultivate the Flow State in pickleball regardless of our play level? Perhaps we will find deeper satisfaction in each point and perform better. It is our goal to allow you to be "in the moment". We understand that achieving excellence in pickleball as in life, requires more than just physical training. It demands a holistic approach that nurtures many facets of ourselves.
      </p>

      <p className="mb-6">
        Our 4-Week Performance Program is designed to transform your game and possibly life, through a tailored approach for each player.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4">PROGRAM DETAILS</h2>
        <div className="border-b-2 border-gray-800 w-20 mb-4"></div>
        
        <p className="mb-2"><strong>Duration:</strong> 4 weeks, a total of 6 hours of coaching.</p>
        <p className="mb-2"><strong>Structure:</strong> Weekly one-on-one coaching sessions via Zoom</p>
        <p className="mb-4"><strong>Content:</strong> Tailored strategies to enhance mental focus, reduce performance anxiety, and learn about the principle of the Flow State to achieve it during play.</p>

        <p className="mb-2 font-semibold">Benefits:</p>
        <ul className="mb-4 space-y-1">
          <li>• Achieve deeper concentration and mental clarity during games.</li>
          <li>• Learn techniques to enter and maintain inside The Flow State.</li>
          <li>• Overcome mental barriers that hinder your enjoyment and performance.</li>
          <li>• Unlock mental strategies that work best for your playing level and style.</li>
        </ul>

        <p className="mb-4 font-semibold">The all-inclusive fee covers all coaching sessions plus:</p>
        
        <p className="mb-2"><strong>25% Discount at Moment Pickleball.com:</strong> Enjoy specially reduced prices on all our products.</p>
        
        <p className="mb-2"><strong>3 Complimentary Moment Performance Journals:</strong> Keep track of your progress and insights.</p>
        
        <p className="mb-2"><strong>Exclusive Discounts with Partners:</strong> Gain access to special offers from our partner organizations for reduced playtime fees or product discounts.</p>
        
        <p className="mb-2"><strong>Worksheets and Additional Resources:</strong> You will receive worksheets and actionable items after every session. These are designed to reinforce learning, track progress, and guide mental practice to help you on the court.</p>
        
        <p className="mb-2"><strong>"In The Moment" Ebook:</strong> introduces the Flow State and how we can achieve being in these elusive moments.</p>
        
        <p className="mb-4"><strong>Free Moment Balance Board:</strong> Increase your mental and physical conditioning while fine-tuning your central nervous system's default programming (Fight, Flight, Fawn, Freeze) with a free board from our sister brand, Moment Balance Boards.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose This Program?</h2>
        <p className="mb-4">
          Our program is not about improving your physical game; it's about fostering a deeper understanding of your mindset and actions while playing Pickleball. It's about developing a resilient mindset..the Moment Mindset.. and mastering the skills that lead to consistent performance improvements. Moment Pickleball is committed to helping you achieve your very best.
        </p>
        <p className="mb-4">
          Whether you're preparing for competition or simply aiming to master new skills, Moment's Performance Mindset Program offers the resources, expertise, and support you need to excel.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Have Questions? Want to Learn More? Please reach out to us.</h2>
        
        <div className="max-w-2xl mx-auto border border-gray-300 p-8 bg-gray-50">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 text-sm">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 bg-white"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 bg-white"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 bg-white"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm">Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-2 border border-gray-300 bg-white"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gray-800 text-white py-3 px-6 hover:bg-gray-700 transition-colors"
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  );
}