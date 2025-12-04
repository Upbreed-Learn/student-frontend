import { Button } from '@/components/ui/button';
import hero from '../../assets/images/home-hero.png';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const progressLevel = 50;

  return (
    <section className="flex items-end gap-7 bg-[#305B43] pt-10 pb-8 max-lg:hidden">
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

export const MobileHero = () => {
  const progressLevel = 50;

  return (
    <section className="flex items-end gap-7 bg-white lg:hidden">
      <div className="flex w-full flex-col gap-4 pt-6 pb-4 text-center">
        <h1 className="text-xl/[100%] font-bold text-[#00230F]">
          Welcome Back <br /> Jennifer O,
        </h1>
        <p className="text-xs/[10px] font-semibold text-[#9B9B9B]">
          Try read for about 5 - 10mins a day, to track your progress to success
        </p>
        <div className="flex justify-center bg-[#305B43] px-9 py-6">
          <div className="flex w-full max-w-84 flex-col gap-2 rounded bg-white p-5">
            <p className="text-start text-xs/5 text-[#737373]">Latest course</p>
            <div className="flex items-center gap-1.5">
              <div className="h-[4.563125rem] w-33.5 shrink-0 overflow-hidden rounded">
                <img
                  src={hero}
                  alt="home-hero"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-start text-[10px]/3 font-bold">
                    How to Sell Anything to anyone, anywhere and anyhow
                  </p>
                  <p className="text-start text-[8px]/[100%] font-semibold text-[#949494]">
                    Dupe Melanin
                  </p>
                </div>
                <span className="relative block h-1 w-full rounded-lg bg-[#D9D9D9]">
                  <span
                    style={{
                      width: `${progressLevel}%`,
                    }}
                    className="absolute top-0 left-0 h-full rounded-lg bg-[#305B43] transition-[width]"
                  ></span>
                  <span className="sr-only">Progress Level</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
