import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center bg-[#00230F]">
      <div className="flex flex-col items-center gap-4 pt-16 pb-8 text-white">
        <h1 className="text-5xl/[100%] font-medium">Welcome Jennifer,</h1>
        <p className="text-xs/[100%] font-medium">
          You are about to become the best version of yourself
        </p>
        <Button>
          Go to Dashboard
          <ArrowRightIcon />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
