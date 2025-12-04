import { Bookmark, Play } from 'lucide-react';
import { Link } from 'react-router';
import preview from '../assets/images/course-preview.jpg';

const CourseCard = () => {
  return (
    <div className="group _w-full _max-w-120 relative overflow-hidden rounded-lg bg-[#F2F2F2]">
      <div className="relative h-46 md:h-38">
        <span className="custom-gradient absolute inset-0 md:hidden"></span>
        <button className="absolute top-4 right-5 z-10 cursor-pointer p-1 transition-transform active:scale-95 md:hidden">
          <Bookmark size={22} className="text-white" />
        </button>
        <img
          src={preview}
          alt="course-preview"
          className="size-full object-cover"
        />
        <span className="absolute top-3 right-7 rounded-lg bg-[#D0EA50] px-[6.5px] py-[5.9px] text-[6.5px]/[100%] font-semibold text-black max-md:hidden">
          New
        </span>
        <Play
          size={36}
          className="absolute top-1/2 left-1/2 -translate-1/2 text-white opacity-0 transition-opacity group-hover:opacity-100"
        />
        <div className="absolute bottom-2 flex flex-col gap-1.5 px-6 md:hidden">
          <div className="flex flex-col gap-1.5">
            <span className="w-max rounded-[6.75px] bg-[#D0EA50] px-2 py-1 text-[6.84px]/[100%] font-semibold">
              New
            </span>
            <Link
              to={'/courses/1'}
              className="text-xs/3.5 font-bold text-[#D0EA50]"
            >
              <span className="absolute inset-0"></span>
              How to Sell Anything to anyone, anywhere and anyhow
            </Link>
          </div>
          <div>
            <p className="text-xs/6 font-medium text-[#BEBEBE]">65 Lessons</p>
            <div className="flex items-center justify-between text-sm/6 font-medium text-white">
              <p>Michelle Elegbe</p>
              <p>1h 37m</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7 px-6 pt-2.5 pb-3.5 max-md:hidden">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-sm/6 font-medium text-[#34A853]">
            <p>65 Lessons</p>
            <p>1h 37m</p>
          </div>
          <Link to={'/courses/1'} className="text-sm/5 font-bold">
            <span className="absolute inset-0"></span>
            BUSINESS DEVELOPMENT
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm/6 font-medium text-[#6F6F6F]">
            Michelle Elegbe
          </p>
          <button className="z-10 cursor-pointer p-1 transition-transform active:scale-95">
            <Bookmark size={24} className="text-[#34A853]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
