import React from "react";
import "./style.css";
import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  let [quantity, setQuantity] = useState(0);

  let handleSubtractQuantity = () => {
    setCount(count - 1);
    if (quantity) setCount(count - parseInt(quantity, 10));
  };

  let handleAddQuantity = () => {
    setCount(count + 1);
    if (quantity) setCount(count + parseInt(quantity, 10));
  };

  let handleOnChange = (e) => {
    setQuantity(e.target.value);
  };

  let handleResetCounter = () => {
    setCount(0);
    setQuantity(0);
  };

  return (
    <div id={"content-wrapper"} className={"flex-cont"}>
      <h1>Counter</h1>
      <div id={"counter-wrapper"} className={"wrapper"}>
        <div className={"count"}>
          <p className="cout">{count}</p>
        </div>

        <button className={"btn"} onClick={handleSubtractQuantity}>
          -
        </button>
        <button className={"btn-b"} onClick={handleAddQuantity}>
          +
        </button>

        <div>
          <div className={"flexbtn"}>
          <h2>input value</h2>
            <input
              type="text"
              value={quantity}
              onChange={handleOnChange}
              className={"val"}
            />
          </div>
        </div>
        <button id={"counter-reset"} onClick={handleResetCounter}>
          Reset
        </button>
      </div>
    </div>
  );
}
