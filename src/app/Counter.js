"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="border px-3 py-1 rounded"
      >
        Increment
      </button>
    </div>
  );
}
