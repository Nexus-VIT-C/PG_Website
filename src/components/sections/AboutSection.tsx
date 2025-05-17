import React from 'react';
const AboutSection: React.FC = () => {
  return <section className="bg-white py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-6">
            We provide safe, comfortable, home-like PGs for students and young
            professionals. With over 5 years of experience, we understand what
            makes a PG feel like home.
          </p>
        </div>
      </div>
    </section>;
};
export default AboutSection;