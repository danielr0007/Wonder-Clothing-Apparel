import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ImgSlider = function () {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + sectionDisplays.length) % sectionDisplays.length
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % sectionDisplays.length);
  };

  const sectionDisplays = [
    {
      title: "Latest Mobile Devices",
      image:
        "'https://drive.google.com/uc?export=view&id=1tOo0s2E5U3LD-P7iKDnkY54_nBgRz7GT'",
    },
    {
      title: "MacBook Central",
      image:
        "'https://drive.google.com/uc?export=view&id=1VAGBaftAFu6tUdHEgxRcqj5fyXaISLoH'",
      pos: "bg-center",
    },
    {
      title: "Perfumes For Everyone",
      image:
        "'https://drive.google.com/uc?export=view&id=1V3KOLDndyXWr1l8LBEvObe-emdWKli0N'",
    },
  ];

  return (
    <div className="p-5 xl:max-w-[1325px] mx-auto flex items-center gap-3 ">
      <div id="arrowleft">
        <FaArrowCircleLeft onClick={goToPreviousSlide} />
      </div>

      <div className="w-full p-2 h-[500px] relative ">
        <SliderBanner
          title={sectionDisplays[currentIndex]?.title}
          image={sectionDisplays[currentIndex]?.image}
          pos={sectionDisplays[currentIndex]?.pos}
        />
      </div>

      <div id="arrowright">
        <FaArrowCircleRight onClick={goToNextSlide} />
      </div>
    </div>
  );
};

const SliderBanner = function (props) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0)), url(${props.image})`,
      }}
      className={`w-full h-[500px] bg-cover absolute ${props.pos} transition-transform duration-200 ease-in-out`}
    >
      <div className="w-full h-full relative">
        <div className="absolute top-1/2 -translate-y-1/2 ml-20">
          <div className="mb-12">
            <p className="pb-3 text-white text-sm">Ring Top</p>
            <h2 className="text-white text-4xl font-bold">{props.title}</h2>
          </div>

          <h4 className="text-white text-base mb-12">
            Last Call For up to
            <span className="text-4xl text-yellow">50%</span>
            OFF
          </h4>

          <Link className="px-8 py-3 bg-red text-white">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;
