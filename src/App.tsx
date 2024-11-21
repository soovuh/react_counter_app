import React from "react";
import Counter from "./components/Counter";
import UserData from "./components/UserData";
import useCounter from "./hooks/useCounter";
import styles from "./styles/main.module.css";

const App: React.FC = () => {
  const { counter, increment, decrement } = useCounter(1, 1, 10);

  return (
    <div className={styles.app}>
      <Counter counter={counter} onIncrement={increment} onDecrement={decrement} min={1} max={10} />
      <UserData counter={counter} />
    </div>
  );
};

export default App;
