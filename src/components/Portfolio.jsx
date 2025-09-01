import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const Images = [
    {
      src: "agro.png",
      alt: "Agro"
    },
    {
      src: "e-com.png",
      alt: "E-com"
    },
    {
      src: "traveller.png",
      alt: "Traveller"
    },
    {
      src: "agro.png",
      alt: "Agro"
    },
    {
      src: "blood.png",
      alt: "Blood"
    },
    {
      src: "todo.png",
      alt: "Todo"
    },
    {
      src: "timer.png",
      alt: "Timer"
    },
    {
      src: "hrm.png",
      alt: "Hrm"
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center !mb-24">
        <div className="flex flex-col gap-8 w-[80%]">
          <h1 className="text-4xl text-center mt-8 font-bold">My Portfolio</h1>
          <p className="italic text-base leading-relaxed tracking-wide text-justify">
            I take pride in paying attention to the smallest details and making
            sure that my work is pixel perfect. I am excited to bring my skills
            and experience to help businesses achieve their goals and create a
            strong online presence.
          </p>

          <div className="PortfolioCards !mt-10 w-full">
            <div className="grid grid-cols-4 gap-6">
              {Images.map((image, index) => {
                return (
                  <div key={index} className="card h-60 rounded-md !bg-white">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="rounded-md w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button
              className="!rounded-4xl !bg-white !text-black !capitalize w-40 h-10 !text-[13px] !mt-10"
              variant="outlined"
              component={Link}
              to="/more"
            >
              See More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
