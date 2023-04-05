import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { useState, useEffect } from "react";

const TestimonialSlider = function () {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialData = [
    {
      name: "Ron Desantis",
      text: "I needed someone to visualize my vision into a website that connects to my target market. Came across Global Design Inc and can not stop thanking them for a beautiful landing page. Exactly how I wanted my website to be. Definitely recommend these guys.",
      id: 1,
    },
    {
      name: "James Blake",
      text: "The team's passion for web design was evident in the final product they delivered. Their attention to detail and willingness to go above and beyond to ensure our website was just right, was remarkable. We highly recommend them to anyone looking for top-notch web design services.",
      id: 2,
    },
    {
      name: "Jeff Cooper",
      text: "One of my friend recommended this website to me, they saved me from losing my clients. I had zero retention of customers, they beautifully showcased my products now and this boosted my sales too. Definitely recommended to all.",
      id: 3,
    },
    {
      name: "Sierra Lane",
      text: "I needed someone to visualize my vision into a website that connects to my target market. Came across Global Design Inc and can not stop thanking them for a beautiful landing page. Exactly how I wanted my website to be. Definitely recommend these guys.",
      id: 4,
    },
  ];

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonialData.length) % testimonialData.length
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonialData.length);
  };

  const renderSlide = (index) => {
    const slideIndexes = [
      (index - 1 + testimonialData.length) % testimonialData.length,
      index,
      (index + 1) % testimonialData.length,
    ];
  };

  return (
    <div className="sm:p-2 p-1 w-full mx-auto flex items-center sm:gap-6 gap-1">
      <div id="arrowleft">
        <FaArrowCircleLeft />
      </div>

      <div className="flex gap-5 overflow-hidden">
        {testimonialData.map((slideIndex) => (
          <TestimonialCard
            name={slideIndex.name}
            text={slideIndex.text}
            key={slideIndex.id}
          />
        ))}
      </div>

      <div id="arrowright">
        <FaArrowCircleRight />
      </div>
    </div>
  );
};

const TestimonialCard = (props) => {
  console.log(props);
  return (
    <div className="min-w-[32.2%] px-5 pt-8 pb-14 text-center bg-mute-green rounded-lg">
      <div className="pb-6 w-10/12 mx-auto flex flex-col justify-center items-center">
        <div className="w-16 h-16 rounded-full bg-red mx-auto"></div>
        <h4 className="pt-2 pb-1 text-xl font-semibold">{props.name}</h4>
        <div className="flex text-yellow">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </div>
      </div>

      <p className="text-sm">{props.text}</p>
    </div>
  );
};

export default TestimonialSlider;
