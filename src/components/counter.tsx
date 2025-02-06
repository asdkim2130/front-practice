import { useState } from "react";

export function Counter() {
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
