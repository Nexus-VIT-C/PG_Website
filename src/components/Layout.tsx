import React from 'react';
import WhatsAppButton from './ui/WhatsAppButton';
import Footer from './sections/FooterSection';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  return <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {children}
      <WhatsAppButton />
      <Footer />
    </div>;
};
export default Layout;