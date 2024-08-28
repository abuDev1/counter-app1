import React, { useState } from "react";
import { Number } from "./Number";
import { Buttons } from "./Buttons";

export const Main = () => {
  // let counter = 0;

  // Переменные состояния

  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 3);
  };

  const minus = () => {
    if (counter > 1) {
      setCounter(counter - 2);
    } else if (counter === 1) {
      setCounter(counter - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };
  return (
    <main className="main">
      <Number count={counter} />
      <Buttons plus={plus} minus={minus} reset={reset} />
    </main>
  );
};
