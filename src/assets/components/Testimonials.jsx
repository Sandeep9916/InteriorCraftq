import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-4">
            <p className="text-gray-700 font-medium">Client Testimonials</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Real stories from our satisfied clients about their experience
            working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
            <div className="flex gap-4 items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-200"></div>
              <div>
                <h3 className="font-bold text-gray-900">Sarah Johnson</h3>
                <p className="text-gray-600">Residential Client</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
            <blockquote className="text-gray-600 italic mb-4">
              "The team's attention to detail and ability to understand our
              vision was exceptional. They transformed our home into something
              beyond our expectations."
            </blockquote>
            <p className="text-gray-500 text-sm">
              Residential Project - Modern Living Room
            </p>
          </div>

          {/* Add more testimonials here */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
