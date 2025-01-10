import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "BotResponz has transformed how we handle customer service. The AI responses are incredibly natural!",
      author: "Sarah J.",
      role: "Customer Service Manager"
    },
    {
      text: "We've seen a 50% reduction in response time since implementing BotResponz. Amazing tool!",
      author: "Michael R.",
      role: "E-commerce Owner"
    },
    {
      text: "The analytics dashboard gives us invaluable insights into our customer interactions.",
      author: "David L.",
      role: "Marketing Director"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg relative">
              <div className="mb-4 text-[#25D366]">★★★★★</div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
