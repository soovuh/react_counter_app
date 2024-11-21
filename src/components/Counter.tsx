import React from "react";
import styles from "../styles/main.module.css"

interface CounterProps {
  counter: number;
  min: number;
  max: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ counter, onIncrement, onDecrement, min, max }) => {
  return (
    <div className={styles.counterWrapper}>
      <button className={styles.counterButton} onClick={onDecrement} disabled={counter === min}>-</button>
      <span className={styles.counterText}>Counter: {counter}</span>
      <button className={styles.counterButton} onClick={onIncrement} disabled={counter === max}>+</button>
    </div>
  );
};

export default Counter;
