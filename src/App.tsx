import React from "react";
import Counter from "./components/Counter";
import UserData from "./components/UserData";
import useCounter from "./hooks/useCounter";
import styles from "./styles/main.module.css";

const defaultValue = {
  value: 1,
  min: 1,
  max: 10
};

const App: React.FC = () => {
  const { counter, increment, decrement } = useCounter(defaultValue.value, defaultValue.min, defaultValue.max);

  return (
    <div className={styles.app}>
      <Counter
        counter={counter}
        onIncrement={increment}
        onDecrement={decrement}
        min={defaultValue.min}
        max={defaultValue.max}
      />
      <UserData counter={counter} />
    </div>
  );
};

export default App;
