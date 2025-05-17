import React from 'react';
const HeroSection: React.FC = () => {
  return <section className="relative bg-white w-full">
      <div className="relative h-[500px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="Cozy PG accommodation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/50 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Find Your Perfect Stay
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Comfortable, safe, and affordable PG accommodations for students
                and young professionals
              </p>
              <p className="text-lg text-white/80 mb-8">
                Now Available Near XYZ University, Chennai
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book a Visit Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;