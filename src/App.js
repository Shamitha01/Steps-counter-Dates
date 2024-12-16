import { useState } from "react";
import "./styles.css";

export default function App() {
  const [steps, setSteps] = useState(1);
  const [counter, setCounter] = useState(0);
  const d = new Date();
  d.setDate(d.getDate() + counter);
  function addSteps() {
    setSteps((s) => s + 1);
  }
  function subSteps() {
    setSteps((s) => s - 1);
  }

  function subCounter() {
    setCounter((c) => c - steps);
  }

  return (
    <div className="App">
      <div>
        <button onClick={subSteps}>-</button>
        <span>Steps : {steps}</span>
        <button onClick={addSteps}>+</button>
      </div>
      <div>
        <button onClick={subCounter}>-</button>
        <span>Counter : {counter}</span>
        <button onClick={() => setCounter((c) => c + steps)}>+</button>
      </div>
      <p>
        {counter === 0
          ? `Today is ${d.toDateString()}`
          : `${counter} days from to days is ${d.toDateString()}`}
      </p>
    </div>
  );
}
