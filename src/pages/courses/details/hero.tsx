import preview from '@/assets/images/course-preview.jpg';

const Hero = () => {
  return (
    <section className="flex justify-center bg-[#305B43]">
      <div className="w-full max-w-7xl pt-21.75 pb-7 pl-27.25">
        <div className="flex items-center gap-12">
          <div className="h-67.25 w-40.5 shrink-0 overflow-hidden rounded-[10px]">
            <img
              src={preview}
              alt="course-preview"
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-9 text-white">
            <h1 className="text-xl/6 font-semibold">About the Instructor</h1>
            <p className="w-full max-w-218.25 leading-6">
              Elumelu was born in Jos, Plateau, Nigeria, on 22 March 1963, to
              Suzanne and Dominic Elumelu from Onicha-Ukwu in Aniocha North
              Local Government Area of Delta State. He grew up with four
              siblings, one of whom is Ndudi Elumelu, a minority leader in the
              Nigerian Federal House of Representatives. Elumelu was born in
              Jos, Plateau, Nigeria, on 22 March 1963, to Suzanne and Dominic
              Elumelu from Onicha-Ukwu in Aniocha North Local Government Area of
              Delta State. He grew up with four siblings, one of whom is Ndudi
              Elumelu, a minority leader in the Nigerian Federal House of
              Representatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
