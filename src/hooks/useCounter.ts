import { useState } from "react";

const useCounter = (initialValue: number = 1, min: number = 1, max: number = 10) => {
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