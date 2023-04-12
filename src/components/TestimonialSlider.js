import { RiStarSFill } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = function () {
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

  var settings = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {testimonialData.map((slideIndex) => (
          <TestimonialCard
            name={slideIndex.name}
            text={slideIndex.text}
            key={slideIndex.id}
          />
        ))}
      </Slider>
    </div>
  );
};

const TestimonialCard = (props) => {
  return (
    <div className="min-w-[32.2%] lg:min-h-[355px] md:min-h-[400px] mx-5 px-5 pt-8 pb-14 text-center bg-mute-green dark:bg-d-purple rounded-lg">
      <div className="pb-6 w-10/12 mx-auto flex flex-col justify-center items-center">
        <div className="w-16 h-16 rounded-full bg-red mx-auto"></div>
        <h4 className="pt-2 pb-1 text-xl font-semibold dark:text-white">
          {props.name}
        </h4>
        <div className="flex text-yellow">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </div>
      </div>

      <p className="text-sm dark:text-white">{props.text}</p>
    </div>
  );
};

export default TestimonialSlider;
