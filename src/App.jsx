import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  let secondsPassed = 0;
  if (startTime != null || now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <>
      <h1>Time Passed: {secondsPassed.toFixed(2)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>End</button>
    </>
  );
}

export default App;
