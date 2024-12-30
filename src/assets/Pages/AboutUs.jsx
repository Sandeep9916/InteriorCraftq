import React from 'react';
import HeroSection from './Home';

const AboutSection = () => {
  return (
    <>
      <div id="root">
        {/* Banner Section */}
        <section className="relative h-[400px]">
  <img src="https://images.pexels.com/photos/3847520/pexels-photo-3847520.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Background Image" className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="container mx-auto px-4 py-20 text-center text-white relative z-10 flex items-center justify-center h-full">
    <div>
      <h1 className="text-4xl font-serif font-bold">Welcome to Our Space</h1>
      <p className="mt-4 text-xl">
        Discover the perfect blend of creativity and functionality with our expert design services.
      </p>
    </div>
  </div>
</section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
                  <p className="text-gray-700 font-medium">About Us</p>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                  Creating Beautiful Spaces That Tell Your Story
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  With over 15 years of experience in interior design, we've mastered the art of transforming spaces into stunning environments that reflect our clients' unique personalities and lifestyles. Our passionate team of designers combines creativity with functionality to deliver exceptional results.
                </p>

                <div className="grid grid-cols-2 gap-8 py-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Custom Design Solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Expert Consultation</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Project Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Quality Craftsmanship</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 items-center">
                  <a href="#services" className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Our Services
                  </a>
                  <a href="#process" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                    <span>Learn More</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {/* <div className="aspect-square bg-gray-200 rounded-lg"></div>
                   */}
                   <div className="aspect-square bg-gray-200 rounded-lg">
  <img src="https://images.pexels.com/photos/3847520/pexels-photo-3847520.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image" className="w-full h-full object-cover rounded-lg" />
</div>

                  <div className="aspect-square bg-gray-200 rounded-lg">

                  <img src="https://images.pexels.com/photos/6021777/pexels-photo-6021777.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square bg-gray-200 rounded-lg">
                  <img src="https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image" className="w-full h-full object-cover rounded-lg" />

                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg">
                  <img src="https://images.pexels.com/photos/5570224/pexels-photo-5570224.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image" className="w-full h-full object-cover rounded-lg" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutSection;
