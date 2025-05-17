import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPinIcon, CalendarIcon, ArrowLeftIcon } from 'lucide-react';
import BookingSection from './sections/BookingSection';
const PGDetails: React.FC = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  // In a real app, you would fetch PG details based on the ID
  const pgData = {
    name: 'Sunshine PG Accommodation',
    location: 'Near XYZ University, Chennai',
    images: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'],
    nearby: '5 mins walk to XYZ University, 10 mins to Metro Station, Local market within 500m',
    description: 'Our flagship PG accommodation offering comfortable stay with all modern amenities. Perfect for students and young professionals looking for a home away from home.'
  };
  return <div className="container mx-auto px-4 py-8">
      <Link to="/" className="flex items-center text-blue-600 mb-6 hover:text-blue-800 transition-colors">
        <ArrowLeftIcon size={20} className="mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{pgData.name}</h1>
      <div className="flex items-center text-gray-600 mb-6">
        <MapPinIcon size={20} className="mr-2" />
        {pgData.location}
      </div>
      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {pgData.images.map((image, index) => <div key={index} className={index === 0 ? 'md:col-span-2 md:row-span-2' : ''}>
            <img src={image} alt={`${pgData.name} - Image ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" style={{
          minHeight: '200px'
        }} />
          </div>)}
      </div>
      {/* Description */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          About this PG
        </h2>
        <p className="text-gray-600">{pgData.description}</p>
      </div>
      {/* Nearby Places */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Nearby Places
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <p className="text-gray-600">{pgData.nearby}</p>
        </div>
      </div>
      {/* Map */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Location</h2>
        <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Google Map would be embedded here</p>
        </div>
      </div>
      {/* Room Pricing (Reused from homepage) */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Room Types & Pricing
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="border border-blue-100 px-4 py-3 text-left">
                  Room Type
                </th>
                <th className="border border-blue-100 px-4 py-3 text-left">
                  Price per Month
                </th>
                <th className="border border-blue-100 px-4 py-3 text-left">
                  Facilities Included
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  Single Occupancy
                </td>
                <td className="border border-gray-200 px-4 py-3">₹12,000</td>
                <td className="border border-gray-200 px-4 py-3">
                  AC, Meals, Laundry
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  Double Sharing
                </td>
                <td className="border border-gray-200 px-4 py-3">₹9,000</td>
                <td className="border border-gray-200 px-4 py-3">
                  Meals, Laundry
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  Triple Sharing
                </td>
                <td className="border border-gray-200 px-4 py-3">₹7,000</td>
                <td className="border border-gray-200 px-4 py-3">Meals Only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Booking Section */}
      <BookingSection preselectedPg={pgData.name} />
    </div>;
};
export default PGDetails;