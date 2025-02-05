"use client";

import { useState } from "react";
import Header from "@/components/header";

function Like() {
  const [isLike, setIsLiked] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLiked(!isLike)}>
        {isLike === false ? "좋아요" : "좋아요취소"}
      </button>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <Header title={"좋아요 만들기"} hasBack={true} />
      <Like />
    </div>
  );
}
