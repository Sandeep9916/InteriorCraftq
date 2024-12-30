import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mt-8 mb-4">
            <p className="text-gray-700 font-medium">Our Portfolio</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Showcasing Our Finest Work
          </h2>
          <p className="text-gray-600">
            Explore our collection of thoughtfully designed spaces that inspire and delight.
          </p>
        </div>

        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
            All Projects
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
            Residential
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
            Commercial
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
            Modern
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
            Traditional
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Portfolio Items */}
  {[
    { title: "Modern Living Room", category: "Residential Design", image: "https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { title: "Corporate Office", category: "Commercial Design", image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Luxury Kitchen", category: "Modern Design", image: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Master Bedroom", category: "Traditional Design", image: "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Retail Space", category: "Commercial Design", image: "https://images.pexels.com/photos/13068378/pexels-photo-13068378.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Contemporary Bath", category: "Modern Design", image: "https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ].map((item, index) => (
    <div key={index} className="group relative overflow-hidden rounded-2xl">
      <div
        className="aspect-square bg-gray-200"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-200">{item.category}</p>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
            <span>Load More Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
