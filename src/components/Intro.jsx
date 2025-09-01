import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { PiHandbagSimpleFill } from "react-icons/pi";

const Intro = () => {
  return (
    <div className="container mx-auto !px-4 sm:!px-6 md:!px-8 lg:!px-12 !mb-16 sm:!mb-20 md:!mb-24 lg:!mb-32">
      <div className="flex flex-col-reverse lg:flex-row items-center !gap-10 sm:!gap-12 lg:!gap-20">
        
        <div className="max-w-2xl flex flex-col !gap-3 sm:!gap-4 !mt-12 lg:!mt-20 text-center lg:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Hello,</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            I'm <span className="text-[#fa9821]">Shivraj</span>
          </h1>
          <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
            MERN Stack Developer
          </h3>
          <p className="italic leading-relaxed text-sm sm:text-base md:text-lg">
            Passionate MERN Stack Developer skilled in building responsive web
            apps using MongoDB, Express.js, React, and Node.js. Quick learner,
            team player, and dedicated to writing clean, scalable, and
            maintainable code.
          </p>

          <div className="!mt-5 flex justify-center lg:justify-start">
            <Button
              className="!rounded-3xl !bg-white !text-black !capitalize !w-28 sm:!w-32 !h-10 sm:!h-11 !text-[13px]"
              variant="outlined"
              startIcon={<PiHandbagSimpleFill />}
              component={Link}
              to="/hire"
            >
              Hire Me
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="profile.png"
            alt="profile"
            className="!w-40 sm:!w-52 md:!w-72 lg:!w-80 xl:!w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
