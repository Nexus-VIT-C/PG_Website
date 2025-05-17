import React from 'react';
import { UsersIcon, BuildingIcon, ClockIcon } from 'lucide-react';
const WhyChooseUsSection: React.FC = () => {
  return <section className="bg-white py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="inline-block p-4 rounded-full bg-blue-50 text-blue-600 mb-4">
              <UsersIcon size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Trusted by 300+ Residents
            </h3>
            <p className="text-gray-600">
              Join our community of satisfied residents who call our PGs their
              home away from home.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-block p-4 rounded-full bg-blue-50 text-blue-600 mb-4">
              <BuildingIcon size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Separate PGs for Boys & Girls
            </h3>
            <p className="text-gray-600">
              We maintain separate accommodations for male and female residents
              for privacy and comfort.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-block p-4 rounded-full bg-blue-50 text-blue-600 mb-4">
              <ClockIcon size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Near Top Colleges
            </h3>
            <p className="text-gray-600">
              Our PGs are strategically located near educational institutions
              and business centers.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyChooseUsSection;