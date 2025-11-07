import preview from '@/assets/images/course-preview.jpg';
import { Link } from 'react-router';

const Others = () => {
  return (
    <section className="flex justify-center pb-20">
      <div className="w-full max-w-7xl px-27.25">
        <div className="flex flex-col gap-5.5 border-t border-[#D9D9D9] pt-17">
          <h2 className="text-center text-xl/10 font-bold text-[#0A0A0A]">
            Other Classes you might like
          </h2>
          <div className="grid grid-cols-5 px-10">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Link
                  to={'/courses/1'}
                  className="relative h-69.25 w-44.25 overflow-hidden rounded-lg"
                >
                  <img
                    src={preview}
                    alt="course-preview"
                    className="size-full object-cover"
                  />

                  <div
                    key={index}
                    className="absolute bottom-6 left-5 text-white"
                  >
                    <p className="text-[1.875rem]/[100%] font-bold">
                      Michelle Elegbe
                    </p>
                    <p className="text-xs/5 font-semibold text-[#D9D9D9]">
                      Learn Banking Business
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Others;
