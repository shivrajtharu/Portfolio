import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { PiHandbagSimpleFill } from "react-icons/pi";

const Intro = () => {
  return (
    <>
      <div className="container !mb-24">
        <div className="flex items-center gap-35">
          <div className="max-w-2xl flex flex-col gap-2 !mt-25">
            <h2 className="text-2xl font-semibold">Hello,</h2>
            <h1 className="text-6xl font-bold">
              I'm <span className="text-[#fa9821]">Shivraj</span>
            </h1>
            <h3 className="text-6xl font-bold">MERN Stack Developer</h3>
            <p className="italic leading-relaxed">
              Passionate MERN Stack Developer skilled in building responsive web
              apps using MongoDB, Express.js, React, and Node.js. Quick learner,
              team player, and dedicated to writing clean, scalable, and
              maintainable code.
            </p>
            <br />
            <Button
              className="!rounded-4xl !bg-white !text-black !capitalize w-30 h-10 !text-[13px]"
              variant="outlined"
              startIcon={<PiHandbagSimpleFill />}
              component={Link}
              to="/hire"
            >
              Hire Me
            </Button>
          </div>

          <div>
            <img src="profile.png" alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
