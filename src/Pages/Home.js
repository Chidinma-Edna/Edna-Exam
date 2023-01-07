import React from "react";
import "./style.css";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleSubtractQuantity = () => {
    setCount(count - 1);
    if (quantity) setCount(count - parseInt(quantity, 10));
  };

  const handleAddQuantity = () => {
    setCount(count + 1);
    if (quantity) setCount(count + parseInt(quantity, 10));
  };

  const handleOnChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleResetCounter = () => {
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



export default Home;