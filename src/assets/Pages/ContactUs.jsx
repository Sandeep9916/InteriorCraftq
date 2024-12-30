import React from "react";
import InputMask from "react-input-mask";

const ContactForm = () => {
  return (
    <div id="root">
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
                <p className="text-gray-700 font-medium">Contact Us</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                Let's Create Something Beautiful Together
              </h2>

              <p className="text-gray-600">
                Ready to transform your space? Get in touch with us today for a
                free consultation and let's bring your vision to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    {/* Icon */}
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Office Location
                    </h3>
                    <p className="text-gray-600">123 Design Street, Creative District</p>
                    <p className="text-gray-600">Uttar Pradesh Gorakhpur</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    {/* Icon */}
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Contact Information
                    </h3>
                    <p className="text-gray-600">Phone: +917991XXXX</p>
                    <p className="text-gray-600">Email: sandy@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    {/* Icon */}
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="first_name" className="text-gray-700 font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last_name" className="text-gray-700 font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number
                  </label>
                  <InputMask
                    id="phone"
                    name="phone"
                    mask="(+91) 9999999999"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-gray-700 font-medium">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
                    required
                  >
                    <option value="">Select a Service</option>
                    <option value="residential">Residential Design</option>
                    <option value="commercial">Commercial Design</option>
                    <option value="renovation">Renovation</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-gray-700 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
