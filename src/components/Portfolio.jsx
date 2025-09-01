import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const Images = [
    { src: "agro.png", alt: "Agro" },
    { src: "e-com.png", alt: "E-com" },
    { src: "traveller.png", alt: "Traveller" },
    { src: "agro.png", alt: "Agro" },
    { src: "blood.png", alt: "Blood" },
    { src: "todo.png", alt: "Todo" },
    { src: "timer.png", alt: "Timer" },
    { src: "hrm.png", alt: "Hrm" },
  ];

  return (
    <div className="flex items-center justify-center !px-4 sm:!px-6 md:!px-8 lg:!px-12 !mb-16 sm:!mb-20 md:!mb-24 lg:!mb-32">
      <div className="flex flex-col !gap-6 sm:!gap-8 w-full max-w-6xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center !mt-4 sm:!mt-6 font-bold">
          My Portfolio
        </h1>

        <p className="italic text-sm sm:text-base md:text-lg leading-relaxed tracking-wide text-justify">
          I take pride in paying attention to the smallest details and making
          sure that my work is pixel perfect. I am excited to bring my skills
          and experience to help businesses achieve their goals and create a
          strong online presence.
        </p>

        <div className="PortfolioCards !mt-8 sm:!mt-10 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 !gap-4 sm:!gap-6">
            {Images.map((image, index) => (
              <div
                key={index}
                className="card !h-40 sm:!h-48 md:!h-56 lg:!h-60 rounded-md bg-white shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button
            className="!rounded-3xl !bg-white !text-black !capitalize !w-28 sm:!w-32 !h-10 sm:!h-11 !text-[13px] !mt-8 sm:!mt-10"
            variant="outlined"
            component={Link}
            to="/more"
          >
            See More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
