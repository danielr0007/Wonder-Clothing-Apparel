import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import blackGuyPhone from "../assets/blackguy-phone.jpg";
import perfumes from "../assets/perfumes.jpg";
import mac from "../assets/macbook-window.jpg";

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
      image: blackGuyPhone,
    },
    {
      title: "MacBook Central",
      image: mac,
      pos: "bg-center",
    },
    {
      title: "Perfumes For Everyone",
      image: perfumes,
    },
  ];

  useEffect(() => {
    // Set up the timer to change the slide every 3 seconds
    const timerId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % sectionDisplays.length);
    }, 6000);

    // Clear the timer when the component is unmounted
    return () => {
      clearInterval(timerId);
    };
  }, [currentIndex, sectionDisplays.length]);

  return (
    <div className="sm:p-2 p-1 w-full mx-auto flex items-center sm:gap-3 gap-1">
      <div id="arrowleft">
        <FaArrowCircleLeft onClick={goToPreviousSlide} />
      </div>

      <div className="w-full h-[500px] relative ">
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
      className={`w-full md:h-[500px] h-[400px] bg-cover absolute transition-opacity duration-500 ease-in ${props.pos} `}
    >
      <div className="w-full h-full relative">
        <div className="absolute top-1/2 -translate-y-1/2 md:ml-20 ml-8">
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
