import DualDisplay from '@/assets/jsx-icons/dual-display';
import { Download, Star, Volume2Icon } from 'lucide-react';
import expect01 from '../../assets/images/expect-01.jpg';
import expect02 from '../../assets/images/expect-02.jpg';
import expect03 from '../../assets/images/expect-03.png';
import expect04 from '../../assets/images/expect-04.png';
import expect05 from '../../assets/images/expect-05.png';

const WhatToExpect = () => {
  return (
    <section className="flex justify-center bg-[#305B43]">
      <div className="flex w-full max-w-7xl gap-7 px-50.75 py-7">
        <div className="flex flex-col gap-5 text-white">
          <h2 className="ml-7 text-2xl/6 font-extrabold">What to expect</h2>
          <ul className="flex w-116 flex-col gap-3 [&>li]:flex [&>li]:items-center [&>li]:gap-3">
            <li>
              <DualDisplay />
              <span>All 10+ classes, sessions</span>
            </li>
            <li>
              <Volume2Icon />
              <span>Spatial Audio</span>
            </li>
            <li>
              <Download />
              <span>Download and watch offline (select plans)</span>
            </li>
            <li>
              <DualDisplay />
              <span>All 10+ classes, sessions</span>
            </li>
            <li>
              <Star />
              <span>New classes added every month</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="ml-13.25 h-18 w-41.25 overflow-hidden rounded-lg">
            <img src={expect01} alt="expect-01" />
          </div>
          <div className="flex items-center gap-0.5">
            <div className="h-18 w-41.25 overflow-hidden rounded-lg">
              <img src={expect02} alt="expect-02" />
            </div>
            <div className="h-18 w-41.25 overflow-hidden rounded-lg">
              <img src={expect03} alt="expect-03" />
            </div>
          </div>
          <div className="ml-13.25 flex items-center gap-0.5">
            <div className="h-18 w-41.25 overflow-hidden rounded-lg">
              <img src={expect04} alt="expect-04" />
            </div>
            <div className="h-18 w-41.25 overflow-hidden rounded-lg">
              <img src={expect05} alt="expect-05" />
            </div>
          </div>
          <div className="ml-50.25 h-18 w-41.25 overflow-hidden rounded-lg">
            <img src={expect05} alt="expect-05" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
