"use client";
import { useEffect, useState } from "react";

const cell = [0, 0, 0, 0, 0, 0, 0, 0, 0];

export default function Home() {
  const [state, setState] = useState(cell);
  const [order, setOrder] = useState(9);

  const handler = (index : number) => {
    if (state[index] === 0) { 
      const temp = [...state];
      temp[index] = order;
      setState(temp);
      setOrder(order - 1);
    }
  };

  useEffect(() => {
    if (order === 0) {
      const turns = [...state];
      for (let i = 0; i < turns.length; i++) {
          setTimeout(() => {
            setState((prevState) => {
              const newState = [...prevState];
              newState[i] = 0;
              return newState;
            });
          }, turns[i] * 1000);
      }
      setOrder(9); 
    }
  }, [order, state]);

  return (
    <div className="grid grid-cols-3 gap-8">
      {state.map((pos, index) => (
        <div
          className={`w-10 h-10 border p-2 ${pos && "bg-green-300"}`}
          onClick={() => handler(index)}
          key={index}
        ></div>
      ))}
    </div>
  );
}