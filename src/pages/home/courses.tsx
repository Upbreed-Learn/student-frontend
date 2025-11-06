import { Link } from 'react-router';
import preview from '../../assets/images/course-preview.jpg';
import { Bookmark, ChevronRight } from 'lucide-react';
import { useQueryState } from 'nuqs';
import CourseCard from '@/components/course-card';

const Courses = () => {
  return (
    <section className="flex justify-center pt-20 pb-49.5">
      <div className="flex w-full max-w-7xl flex-col gap-7 pr-18 pl-34.75">
        <CourseBundles />
        <AllCourses />
      </div>
    </section>
  );
};

export default Courses;

const CourseBundles = () => {
  const [_, setCourse] = useQueryState('courseBundles', {
    defaultValue: 'new-courses',
  });
  return (
    <div className="flex items-center gap-27.5">
      <div className="flex flex-col gap-6 text-sm/6 font-semibold text-[#949494]">
        <h4 className="text-[#34A853]">Course Bundles</h4>
        <ul className="flex flex-col gap-2">
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('new-courses')}
            >
              New Courses
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('top-rated')}
            >
              Top rated
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('popular-courses')}
            >
              Popular courses
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('gifts')}
            >
              Gifts
            </button>
          </li>
        </ul>
      </div>
      <div className="relative flex flex-1 items-center gap-7.5 rounded-[10px] bg-[#305B43] py-8.5 pr-10 pl-8">
        <div className="h-43.25 w-68 overflow-hidden rounded-l-lg">
          <img
            src={preview}
            alt="course-preview"
            className="size-full object-cover object-center"
          />
        </div>
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3.5">
              <p className="w-max rounded-lg bg-[#D0EA50] px-[8.5px] py-[3px] text-[9px]/[100%] font-semibold">
                Latest Course
              </p>
              <div className="flex flex-col gap-1">
                <Link
                  to={'#'}
                  className="w-full max-w-66 leading-5 font-extrabold text-white"
                >
                  <span className="absolute inset-0"></span>
                  How to Sell Anything to anyone, anywhere and anyhow
                </Link>
                <div className="flex items-center gap-9 text-xs/6 font-medium text-[#BEBEBE]">
                  <p>65 Lessons</p>
                  <p>1h 37m</p>
                </div>
              </div>
            </div>
            <p className="text-sm/6 font-medium text-white">Michelle Elegbe</p>
          </div>
          <button className="z-10 size-max cursor-pointer p-1 transition-transform active:scale-95">
            <Bookmark className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

const AllCourses = () => {
  const [_, setCourse] = useQueryState('allCourses', {
    defaultValue: 'illustration',
  });
  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-6 text-sm/4 font-semibold text-[#6F6F6F]">
        <h5 className="flex items-center gap-1">
          All Courses <ChevronRight />
        </h5>
        <ul className="flex flex-col gap-3">
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('illustration')}
            >
              Illustration
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('craft')}
            >
              Craft
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer font-bold text-black"
              onClick={() => setCourse('marketing')}
            >
              Marketing & Business
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('photography')}
            >
              Photography & Video
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('design')}
            >
              Design
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('3d-animation')}
            >
              3D & Animation
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('architecture')}
            >
              Architecture
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('writing')}
            >
              Writing
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('fashion')}
            >
              Fashion
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('web-and-app-design')}
            >
              Web & App Design
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('caligraphy')}
            >
              Calligraphy & Typography
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('music')}
            >
              Music & Audio
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setCourse('culinary')}
            >
              Culinary
            </button>
          </li>
        </ul>
      </div>
      <div className="flex flex-1 flex-col gap-8">
        <h3 className="text-xl/[100%] font-bold">Marketing & Business</h3>
        <div className="grid grid-cols-3 gap-5">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <CourseCard key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};
