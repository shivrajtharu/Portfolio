import React from "react";

const Skill = () => {
  return (
    <>
      <div className="flex items-center justify-center !mb-24">
        <div className="flex flex-col gap-8 w-[80%]">
          <h1 className="text-4xl text-center mt-8 font-bold">What I do</h1>
          <p className="italic text-base leading-relaxed tracking-wide text-justify">
            I develop modern web and mobile applications using Flutter and the
            MERN stack. My work includes integrating Firebase for
            authentication, databases, and real-time functionality. I also
            design and build responsive, visually appealing interfaces with
            Tailwind CSS and Next.js.
          </p>

          <div className="skillBars !mt-10 flex flex-col gap-6">
            <div className="card flex w-full h-24 !bg-[#312e2e] shadow-md rounded-md items-center gap-8 !pl-8">
              <img src="web.png" className="w-14 h-14 rounded-md" />
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Website Design</h1>
                <p className="text-sm">This demo text can be changed while making the production ready website </p>
              </div>
            </div>

            <div className="card flex w-full h-24 !bg-[#312e2e] shadow-md rounded-md items-center gap-8 !pl-8">
              <img src="app.png" className="w-14 h-14 rounded-md" />
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Mobile App Design</h1>
                <p className="text-sm">You can write text related to mobile app development </p>
              </div>
            </div>

            <div className="card flex w-full h-24 !bg-[#312e2e] shadow-md rounded-md items-center gap-8 !pl-8">
              <img src="backend.png" className="w-14 h-14 rounded-md" />
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Backend development</h1>
                <p className="text-sm">Backend development using Nodejs </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
