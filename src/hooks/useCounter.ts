import { useState } from "react";

const useCounter = (initialValue: number, min: number, max: number) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const increment = () => {
    setCounter((prev) => (prev < max ? prev + 1 : prev));
  };

  const decrement = () => {
    setCounter((prev) => (prev > min ? prev - 1 : prev));
  };

  return { counter, increment, decrement };
};

export default useCounter;