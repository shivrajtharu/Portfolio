import React from "react";

const Skill = () => {
  return (
    <div className="flex items-center justify-center !px-4 sm:!px-6 md:!px-8 lg:!px-12 !mb-16 sm:!mb-20 md:!mb-24 lg:!mb-32">
      <div className="flex flex-col !gap-6 sm:!gap-8 w-full max-w-6xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center !mt-4 sm:!mt-6 font-bold">
          What I Do
        </h1>

        <p className="italic text-sm sm:text-base md:text-lg leading-relaxed tracking-wide text-justify">
          I develop modern web and mobile applications using Flutter and the
          MERN stack. My work includes integrating Firebase for authentication,
          databases, and real-time functionality. I also design and build
          responsive, visually appealing interfaces with Tailwind CSS and
          Next.js.
        </p>

        <div className="skillBars !mt-8 sm:!mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 !gap-4 sm:!gap-6">
          <div className="card flex items-center !gap-4 sm:!gap-6 !bg-[#312e2e] shadow-md rounded-md !p-3 sm:!p-4">
            <img
              src="web.png"
              className="!w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-14 md:!h-14 rounded-md"
            />
            <div className="flex flex-col">
              <h1 className="text-base sm:text-lg md:text-xl font-bold">
                Website Design
              </h1>
              <p className="text-xs sm:text-sm">
                This demo text can be changed while making the production ready
                website
              </p>
            </div>
          </div>

          <div className="card flex items-center !gap-4 sm:!gap-6 !bg-[#312e2e] shadow-md rounded-md !p-3 sm:!p-4">
            <img
              src="app.png"
              className="!w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-14 md:!h-14 rounded-md"
            />
            <div className="flex flex-col">
              <h1 className="text-base sm:text-lg md:text-xl font-bold">
                Mobile App Design
              </h1>
              <p className="text-xs sm:text-sm">
                You can write text related to mobile app development
              </p>
            </div>
          </div>

          <div className="card flex items-center !gap-4 sm:!gap-6 !bg-[#312e2e] shadow-md rounded-md !p-3 sm:!p-4">
            <img
              src="backend.png"
              className="!w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-14 md:!h-14 rounded-md"
            />
            <div className="flex flex-col">
              <h1 className="text-base sm:text-lg md:text-xl font-bold">
                Backend Development
              </h1>
              <p className="text-xs sm:text-sm">
                Backend development using Node.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
