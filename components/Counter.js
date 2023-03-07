import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const buttonStyle = {
    width: "200px",
    height: "80px",
    fontSize: "24px",
    margin: "10px",
  };
  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <div>
      <h1 style={buttonContainerStyle}>counter:{count}</h1>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={increment}>
          +
        </button>
        <button style={buttonStyle} onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
