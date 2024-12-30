import React from 'react';
import About from "./AboutUs"
import Services from "./Services"
import Testimonials from "../components/Testimonials"
import ContactForm from "./ContactUs"
import Portfolio from "./Portfolio"
import Process from "./Process"
import About1 from '../components/about1';



const HeroSection = () => {
  return (
    <>
      <div id="root">
        <section id="hero" className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0 opacity-50">
            <img
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Background Design"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-8">
                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-gray-900">
                  Transform Your Space Into a
                  <span className="text-gray-700">Masterpiece</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-lg">
                  Expert interior design services that bring your vision to life. Create stunning spaces that reflect your unique style and personality.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium">
                    Get Started
                  </a>
                  <a href="#portfolio" className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium">
                    View Portfolio
                  </a>
                </div>

                <div className="flex items-center gap-8 pt-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900">250+</p>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900">15+</p>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900">100%</p>
                    <p className="text-gray-600">Satisfied Clients</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl hidden md:block">
                <div className="absolute inset-0">
                  <img
                    src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent">
                  <div className="absolute inset-0">
                    <img
                      src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gray-200 animate-pulse">vvvvv</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <a href="/about-us" className="text-gray-600 hover:text-gray-900 transition-colors animate-bounce flex flex-col items-center">
              <span className="text-sm mb-2">Scroll Down</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </section>

      </div>
      < About1 id="about" />
      <Services id="services" />
      <Portfolio id="portfolio" />
      <Process id="Process" />
      <Testimonials id="testimonials" />
      <ContactForm id="contact" />

    </>
  );
};

export default HeroSection;