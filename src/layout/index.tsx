import { Outlet } from 'react-router';
import Footer from './footer';
import Navbar from './navbar';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './scroll-to-top';

const RootLayout = () => {
  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
