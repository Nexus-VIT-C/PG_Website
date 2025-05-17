import React from 'react';
const PricingSection: React.FC = () => {
  return <section className="bg-gray-50 py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Room Types & Pricing
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Choose the perfect accommodation that fits your needs and budget
          </p>
        </div>
        <div className="max-w-4xl mx-auto overflow-x-auto">
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
    </section>;
};
export default PricingSection;