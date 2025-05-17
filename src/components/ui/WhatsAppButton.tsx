import React from 'react';
import { MessageCircleIcon } from 'lucide-react';
const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/911234567890', '_blank');
  };
  return <button onClick={handleWhatsAppClick} className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1" aria-label="Chat on WhatsApp">
      <MessageCircleIcon size={28} />
    </button>;
};
export default WhatsAppButton;