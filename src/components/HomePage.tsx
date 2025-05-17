import React from 'react';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import LocationsSection from './sections/LocationsSection';
import AmenitiesSection from './sections/AmenitiesSection';
import PricingSection from './sections/PricingSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import BookingSection from './sections/BookingSection';
const HomePage: React.FC = () => {
  return <main className="w-full">
      <HeroSection />
      <AboutSection />
      <LocationsSection />
      <AmenitiesSection />
      <PricingSection />
      <WhyChooseUsSection />
      <BookingSection />
    </main>;
};
export default HomePage;