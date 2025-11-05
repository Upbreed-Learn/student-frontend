import { Outlet } from 'react-router';
import Footer from './footer';
import Navbar from './navbar';
import { Toaster } from '@/components/ui/sonner';

const RootLayout = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
