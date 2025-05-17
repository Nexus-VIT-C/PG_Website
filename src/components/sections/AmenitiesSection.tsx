import React from 'react';
import { WifiIcon, ShieldCheckIcon, UtensilsIcon, ShirtIcon, TvIcon } from 'lucide-react';
import AmenityCard from '../ui/AmenityCard';
const AmenitiesSection: React.FC = () => {
  const amenities = [{
    icon: <WifiIcon size={32} />,
    title: 'Free Wi-Fi',
    description: 'High-speed internet access throughout the premises'
  }, {
    icon: <ShieldCheckIcon size={32} />,
    title: '24x7 Security',
    description: 'Round-the-clock security with CCTV surveillance'
  }, {
    icon: <UtensilsIcon size={32} />,
    title: 'Nutritious Meals',
    description: 'Home-style, balanced meals three times a day'
  }, {
    icon: <ShirtIcon size={32} />,
    title: 'Laundry Services',
    description: 'Weekly laundry service included with your stay'
  }, {
    icon: <div size={32} />,
    title: 'Housekeeping',
    description: 'Regular cleaning and maintenance of rooms and common areas'
  }, {
    icon: <TvIcon size={32} />,
    title: 'Recreational Facilities',
    description: 'Common room with TV, indoor games, and reading area'
  }];
  return <section className="bg-white py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Amenities & Features
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Everything you need for a comfortable stay
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => <AmenityCard key={index} icon={amenity.icon} title={amenity.title} description={amenity.description} />)}
        </div>
      </div>
    </section>;
};
export default AmenitiesSection;