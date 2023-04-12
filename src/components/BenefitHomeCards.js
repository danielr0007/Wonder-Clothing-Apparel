import { useState } from "react";
import { useSelector } from "react-redux";

const BenefitHomeCards = function ({ cardinfo }) {
  const [hoverEffect, setHoverEffect] = useState(false);
  const themeMode = useSelector((state) => state.themeMode.value);

  function hoverEffectStarter() {
    setHoverEffect(true);
  }

  function hoverEffectEnder() {
    setHoverEffect(false);
  }
  return (
    <div
      onMouseOver={hoverEffectStarter}
      onMouseOut={hoverEffectEnder}
      className={
        themeMode
          ? "md:px-5 px-1 min-h-56 rounded-xl flex flex-col items-center justify-center text-center dark hover:shadow-lg hover:bg-d-grey"
          : "md:px-5 px-1 min-h-56 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-lg"
      }
    >
      {/* <div className="w-16 h-16 mb-4 bg-l-green rounded-3xl hover:animate-bounce"></div> */}
      <img
        className={!hoverEffect ? "w-32" : "w-32 animate-bounce"}
        src={cardinfo.img}
        alt=""
      />
      <h4 className="md:text-lg text-base font-bold mb-2 text-grey dark:text-white">
        {cardinfo.title}
      </h4>
      <p className="text-grey dark:text-white text-sm">{cardinfo.text}</p>
    </div>
  );
};

export default BenefitHomeCards;
