import React from "react";

interface CounterProps {
  counter: number;
  min: number;
  max: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ counter, onIncrement, onDecrement, min, max }) => {
  return (
    <div>
      <button onClick={onDecrement} disabled={counter === min}>
        -
      </button>
      <span>Counter: {counter}</span>
      <button onClick={onIncrement} disabled={counter === max}>
        +
      </button>
    </div>
  );
};

export default Counter;
