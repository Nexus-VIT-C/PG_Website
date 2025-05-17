import React from 'react';
import { Link } from 'react-router-dom';
import LocationCard from '../ui/LocationCard';
const LocationsSection: React.FC = () => {
  const locations = [{
    id: 1,
    name: 'Sunshine PG - XYZ University',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    address: 'Near XYZ University, Chennai'
  }, {
    id: 2,
    name: 'Comfort PG - Central',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: 'City Center, Chennai'
  }, {
    id: 3,
    name: 'Elite PG - Tech Park',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: 'Near Tech Park, Chennai'
  }];
  return <section className="bg-gray-50 py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            PG Locations
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Explore our PG accommodations at prime locations across the city
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map(location => <Link key={location.id} to={`/pg/${location.id}`}>
              <LocationCard name={location.name} image={location.image} address={location.address} />
            </Link>)}
        </div>
      </div>
    </section>;
};
export default LocationsSection;