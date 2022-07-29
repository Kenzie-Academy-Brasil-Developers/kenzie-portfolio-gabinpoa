import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../public/static/img/animations/like.json";
import { ButtonAnimation } from "./style";

export const Like = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <ButtonAnimation
      onClick={() => {
        setAnimationState({
          ...animationState,
          isStopped: false,
          direction: animationState.direction === 1 ? -1 : 1,
        });
      }}
    >
      <div className="animation">
        <Lottie
          options={defaultOptions}
          height={230}
          width={230}
          direction={animationState.direction}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </div>
    </ButtonAnimation>
  );
};
