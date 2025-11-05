import Footer from './footer';
import Navbar from './navbar';
import { Toaster } from '@/components/ui/sonner';

const RootLayout = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <h1>Hello World</h1>
      <Footer />
    </div>
  );
};

export default RootLayout;
