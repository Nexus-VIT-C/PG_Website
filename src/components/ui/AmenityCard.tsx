import React from 'react';
interface AmenityCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}
const AmenityCard: React.FC<AmenityCardProps> = ({
  icon,
  title,
  description
}) => {
  return <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
};
export default AmenityCard;