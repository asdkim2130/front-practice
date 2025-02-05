"use client";

import Header from "@/components/header";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">카운터</h1>
        <div className="text-6xl font-bold text-cyan-600 mb-6">{count}</div>
        <div className="flex space-x-4">
          <button
            onClick={() => setCount(count + 1)}
            className="text-2xl bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-400 transition"
          >
            +
          </button>
          <button
            onClick={() => {
              if (count > 0) setCount(count - 1);
            }}
            className="text-2xl bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-400 transition"
          >
            -
          </button>
        </div>
        <button
          onClick={() => setCount(0)}
          className="mt-6 text-xl bg-gray-500 text-white px-6 py-2 rounded-xl hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

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
