import { Button } from '@/components/ui/button';
import hero from '../../assets/images/home-hero.png';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const progressLevel = 50;

  return (
    <section className="flex items-end gap-7 bg-[#305B43] pt-10 pb-8">
      <h1 className="flex-1/3 pb-7 text-end text-4xl/[100%] font-bold text-white">
        Welcome <br /> Back <br /> Jennifer O,
      </h1>
      <div className="flex flex-2/3 flex-col gap-6 rounded-l-lg bg-white pt-12 pb-10 pl-12">
        <div className="flex flex-col gap-3">
          <p className="text-2xl/[100%] font-semibold">Slow and Steady</p>
          <p className="text-xs/5 font-semibold text-[#6F6F6F]">
            Try read for about 5 - 10mins a day, to track your progress to
            success
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="h-41.5 w-76.5 overflow-hidden rounded-l-lg">
            <img
              src={hero}
              alt="home-hero"
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <p className="leading-[100%] font-semibold text-[#110000]">
                  Product Management 101
                </p>
                <p className="text-xs/[100%] font-semibold text-[#949494]">
                  Dupe Melanin
                </p>
              </div>
              <span className="relative block h-2.5 w-70.25 rounded-l-lg bg-[#D9D9D9]">
                <span
                  style={{
                    width: `${progressLevel}%`,
                  }}
                  className="absolute top-0 left-0 h-full rounded-l-lg bg-[#305B43] transition-[width]"
                ></span>
                <span className="sr-only">Progress Level</span>
              </span>
            </div>
            <Button className="w-max">
              Continue
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
