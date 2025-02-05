"use client";

import { useRef, useState } from "react";
import Header from "@/components/header";
import animatedLike from "../../../../public/like-icon.json";
import Lottie from "lottie-react";

function Like() {
  const lottieRef = useRef<any>(null);
  const [isLike, setIsLiked] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsLiked(!isLike)}
        className="bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500"
      >
        {isLike === false ? "좋아요" : "좋아요취소"}
      </button>

      <button onClick={handleClick}>
        <Lottie
          animationData={animatedLike}
          loop={false}
          autoplay={false}
          style={{ width: 100, height: 100 }}
          onComplete={() => setIsLiked(true)}
        />
      </button>
    </div>
  );

  function handleClick() {
    if (lottieRef.current) {
      lottieRef.current.paly();
    }
    if (lottieRef.current) {
      if (isLike) {
        lottieRef.current.stop();
        setIsLiked(false);
      } else {
        lottieRef.current.play();
      }
    }
  }
}

export default function Page() {
  return (
    <div>
      <Header title={"좋아요 만들기"} hasBack={true} />
      <Like />
    </div>
  );
}
