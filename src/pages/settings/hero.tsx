import AvatarCustom from '@/components/ui/custom/avatar';
import preview from '@/assets/images/course-preview.jpg';
import Location from '@/assets/jsx-icons/location';
import { useQueryState } from 'nuqs';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Hero = () => {
  return (
    <section className="flex justify-center bg-[#305B43] text-white">
      <div className="flex w-full max-w-7xl flex-col px-18 pt-14.5">
        <div className="flex items-center gap-13">
          <AvatarCustom
            src={preview}
            alt="course-preview"
            fallback="JO"
            className="size-31.75"
          />
          <div className="flex flex-col gap-1.5">
            <p className="text-lg/6 font-semibold">Tope Adenola</p>
            <div className="flex items-center gap-1">
              <Location />
              <p className="text-xs/6 font-semibold text-[#E0E0E0]">
                Accra, Ghana
              </p>
            </div>
          </div>
        </div>
        <SettingsTab />
      </div>
    </section>
  );
};

export default Hero;

const SettingsTab = () => {
  const [tab, setTab] = useQueryState('section', {
    defaultValue: 'profile',
  });

  return (
    <Tabs
      defaultValue="my-courses"
      className="pl-45.25"
      value={tab}
      onValueChange={setTab}
    >
      <TabsList className="h-auto gap-8 bg-transparent">
        <TabsTrigger
          value="profile"
          className="cursor-pointer rounded-none border-x-0 border-t-0 border-b-[5px] border-transparent pb-3 text-white transition-colors data-[state=active]:border-[#D0EA50] data-[state=active]:bg-transparent data-[state=active]:text-[#D0EA50] data-[state=active]:shadow-none"
        >
          Profile
        </TabsTrigger>
        <TabsTrigger
          value="subscription"
          className="cursor-pointer rounded-none border-x-0 border-t-0 border-b-[5px] border-transparent pb-3 text-white transition-colors data-[state=active]:border-[#D0EA50] data-[state=active]:bg-transparent data-[state=active]:text-[#D0EA50] data-[state=active]:shadow-none"
        >
          Subscription
        </TabsTrigger>
        <TabsTrigger
          value="privacy"
          className="cursor-pointer rounded-none border-x-0 border-t-0 border-b-[5px] border-transparent pb-3 text-white transition-colors data-[state=active]:border-[#D0EA50] data-[state=active]:bg-transparent data-[state=active]:text-[#D0EA50] data-[state=active]:shadow-none"
        >
          Privacy
        </TabsTrigger>
        <TabsTrigger
          value="password"
          className="cursor-pointer rounded-none border-x-0 border-t-0 border-b-[5px] border-transparent pb-3 text-white transition-colors data-[state=active]:border-[#D0EA50] data-[state=active]:bg-transparent data-[state=active]:text-[#D0EA50] data-[state=active]:shadow-none"
        >
          Password
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
