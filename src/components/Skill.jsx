import React from "react";

const Skill = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-8 w-[60%]">
          <h1 className="text-4xl text-center mt-8 font-bold">What I do</h1>
          <p className="italic text-base leading-relaxed tracking-wide text-justify">
            I develop modern web and mobile applications using Flutter and the
            MERN stack with Next.js. My work includes integrating Firebase for
            authentication, databases, and real-time functionality. I also
            design and build responsive, visually appealing interfaces with
            Tailwind CSS and Next.js.
          </p>

          <div className="skillBars !mt-20 flex">
            <div className="card flex w-full h-24 !bg-[#8a7777] shadow-md rounded-md items-center gap-8 !pl-8">
                <img src="web.png" className="w-14 h-14 rounded-md" />
                <h1 className="text-2xl font-bold">Website Design</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
