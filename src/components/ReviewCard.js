import { testimonialPics } from "../constants";

const ReviewCardContainer = function () {
  return (
    <div className="lg:w-5/6 pr-2 w-full overflow-scroll">
      <ReviewCard
        pic={testimonialPics[0]}
        name="Daniel Rodriguez"
        message="Amazing product! Buying another one!"
      />
      <ReviewCard
        pic={testimonialPics[1]}
        name="Josh Duhamel"
        message="Works perfect! Very satisfied."
      />
      <ReviewCard
        pic={testimonialPics[2]}
        name="Rachel Dizzi"
        message="Better than I expected. Fast arrival too!"
      />
    </div>
  );
};

const ReviewCard = function (props) {
  return (
    <div className="p-3 mb-3 grid grid-cols-10 gap-4 items-center bg-white rounded-lg">
      <img
        className="w-16 h-16 rounded-full mx-auto col-span-2"
        src={props.pic}
        alt="user review picture"
      />
      <div className="col-span-8">
        <h4 className="text-lg font-semibold">{props.name}</h4>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default ReviewCardContainer;
