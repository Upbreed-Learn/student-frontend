import preview from '@/assets/images/course-preview.jpg';
import play from '@/assets/gifs/play.gif';
import { PlayIcon } from 'lucide-react';
import StarIcon from '@/assets/jsx-icons/star';

const About = () => {
  return (
    <section className="flex justify-center pt-20.5 pb-[12.6675rem]">
      <div className="flex w-full max-w-7xl flex-col gap-5">
        <h2 className="pl-27.25 text-xl/6 font-semibold">About this Class</h2>
        <div className="flex flex-col gap-6">
          <div className="flex h-126 items-center bg-[#00230F]">
            <div className="relative h-full flex-3/4">
              <img
                src={preview}
                alt="course-preview"
                className="size-full object-cover"
              />
              <img
                src={play}
                alt="play"
                className="absolute top-1/2 left-1/2 -translate-1/2"
              />
            </div>
            <div className="scrollbar-custom flex h-full flex-1/4 flex-col gap-11 overflow-auto p-7.5 py-11">
              <div className="flex items-center justify-between rounded-[10px] bg-[#305B43] px-9 py-3.5 text-[#D0EA50]">
                <p className="text-xs/6 font-semibold">Trailer </p>
                <PlayIcon size={24} />
              </div>
              <div className="flex flex-col gap-4">
                {Array(10)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-3 rounded-[10px] bg-[#305B43] px-9 py-3.5 text-white"
                    >
                      <p className="text-xs/6 font-semibold">Trailer</p>
                      <PlayIcon size={24} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 pl-27.25">
            <p className="w-full max-w-201.75 text-sm/5 tracking-[0.14px] text-black">
              Learn the art and science of game design with Will Wright, the
              mind behind SimCity and The Sims. <br /> In this game design
              class, Will teaches you how to create games that empower players
              and unleash their imagination. <br /> {`You’ll`} develop a tool
              set for understanding player psychology, as well as learn{' '}
              {`Will’s`} approach to generating and <br /> pitching ideas,
              prototyping, playtesting, and building a community.
            </p>
            <div className="flex flex-col gap-2">
              <ul className="flex flex-col gap-2 text-sm/6 text-[#6F6F6F] [&_span]:font-bold">
                <li>
                  Instructor(s): <span>Tony Elumelu</span>
                </li>
                <li>
                  Class Length: <span>21 Video Lessons (1 Hour 32 Mins)</span>
                </li>
                <li>
                  Category: <span>Business</span>
                </li>
              </ul>
              <div className="flex items-center gap-0.5">
                <StarIcon fill="#FFC700" />
                <StarIcon fill="#FFC700" />
                <StarIcon fill="#FFC700" />
                <StarIcon fill="#FFC700" />
                <StarIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
