import React from 'react';
import { MapPinIcon } from 'lucide-react';
interface LocationCardProps {
  name: string;
  image: string;
  address: string;
}
const LocationCard: React.FC<LocationCardProps> = ({
  name,
  image,
  address
}) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPinIcon size={18} className="mr-2" />
          <span>{address}</span>
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors">
          View Details
        </button>
      </div>
    </div>;
};
export default LocationCard;