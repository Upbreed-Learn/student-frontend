import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { Link } from 'react-router';

const ChooseYourPlan = () => {
  return (
    <section className="flex justify-center bg-[#00230F] pb-6">
      <div className="flex w-full max-w-7xl flex-col gap-16 px-36.25 pt-12 text-white">
        <div className="ml-13.5 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl/[100%] font-medium">Choose your plan</h2>
            <p className="text-xs/[100%] font-medium">
              All membership plans come with a 30 day satisfaction guarantee
            </p>
          </div>
          <PlanTabs />
        </div>
        <div className="relative flex flex-col gap-29.25">
          <ul className="text-xs/[100%] font-medium [&>li]:border-b [&>li]:border-[#305B43] [&>li]:py-7 [&>li]:pl-13.5 [&>li]:last:border-none">
            <li>Monthly Price ( billed half-year and annually)</li>
            <li>Download for Offline viewing</li>
            <li>All 200+ classes acrross 11 categories</li>
            <li>
              Access to Sessions by UPBREED <br /> Learn by doing in just 30
              days.
            </li>
            <li>Watch on your computer, TV, Phone or tablet</li>
            <li>Bonus class guides & content</li>
          </ul>
          <PlanSpecCard
            plan="Standard"
            device="1 Device"
            offline="No Offline mode"
            monthlyPrice="$5"
            download="No"
          />
          <PlanSpecCard
            className="right-20 bg-transparent"
            plan="Premium"
            device="2 Devices"
            offline="Offline mode"
            btnClassName="border-[#305B43] bg-transparent border text-white hover:bg-transparent"
            monthlyPrice="$10"
            download="Yes"
            allClasses="text-transparent"
            accessSessions="Check"
            watch="Check"
          />
          <div className="flex items-center gap-19.5 self-center">
            <Link
              to="/my-courses"
              className="p-2 text-xs/[100%] font-semibold underline"
            >
              Skip
            </Link>
            <Button className="w-70.25 rounded">Continue</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseYourPlan;

const PlanTabs = () => {
  const [tab, setTab] = useQueryState('plan', { defaultValue: 'annually' });

  return (
    <Tabs value={tab} defaultValue="annually" onValueChange={setTab}>
      <TabsList className="h-7.5 rounded-[30px] bg-[#D0EA50] p-0">
        <TabsTrigger
          value="6-months"
          className="h-full rounded-[30px] px-7 text-xs/[100%] font-medium data-[state=active]:bg-[#305B43] data-[state=active]:text-white"
        >
          6 Months
        </TabsTrigger>
        <TabsTrigger
          value="annually"
          className="h-full rounded-[30px] px-7 text-xs/[100%] font-medium data-[state=active]:bg-[#305B43] data-[state=active]:text-white"
        >
          Annually
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

const PlanSpecCard = (props: {
  className?: string;
  plan: string;
  device: string;
  offline: string;
  btnClassName?: string;
  monthlyPrice: string;
  download: string;
  allClasses?: string;
  accessSessions?: string;
  watch?: string;
}) => {
  const {
    className,
    plan,
    device,
    offline,
    btnClassName,
    monthlyPrice,
    download,
    allClasses,
    accessSessions,
    watch,
  } = props;
  return (
    <ul
      className={cn(
        'absolute -top-40 right-80 flex flex-col items-center bg-[#305B43] px-10 pt-4 pb-18 text-xs/[100%] font-semibold',
        className,
      )}
    >
      <li className="pb-4.5 font-semibold!">{plan}</li>
      <li className="pb-4">{device}</li>
      <li className="pb-5">{offline}</li>
      <li className="pb-12">
        <Button className={cn('h-8.5 w-24.25 rounded', btnClassName)}>
          Select
        </Button>
      </li>
      <li className="pb-14">{monthlyPrice}</li>
      <li className="pb-14">{download}</li>
      <li className="pb-14">
        <Check className={cn('text-white', allClasses)} />
      </li>
      <li className="pb-12">
        <Check className={cn('text-white', accessSessions)} />
      </li>
      <li className="pb-12">
        <Check className={cn('text-white', watch)} />
      </li>
    </ul>
  );
};
