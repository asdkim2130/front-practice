"use client";

import Header from "@/components/header";
import { useState } from "react";
import { Counter } from "@/components/counter";

export default function assignments() {
  return (
    <div>
      <Header title={"카운터 만들기"} hasBack={true} />
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
}

// function 클릭시실행할함수() {
//   setCount(count + 1);
// }
// function 클릭시실행할감소함수() {
//   if (count > 0) {
//     setCount(count - 1);
//   }
// }

// return (
//   <div className="">
//     <Header title={"카운터 만들기"} hasBack={true} />
//     <div className="text-5xl font-bold text-cyan-400">{count}</div>
//     <button
//       onClick={클릭시실행할함수}
//       className="text-2xl bg-red-500 text-white px-2 rounded-md hover:bg-red-200"
//     >
//       +
//     </button>
//     <button
//       onClick={클릭시실행할감소함수}
//       className="text-2xl bg-blue-500 text-white px-3 rounded-md hover:bg-blue-200"
//     >
//       -
//     </button>
//   </div>
// );
