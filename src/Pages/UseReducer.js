import React from "react";
import "./style.css";
import { useReducer } from "react";

const initialState = { count: 0, quantity: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "addOne":
      return {
        ...state,
        count: state.count + 1 + parseInt(state.quantity, 10)
      };
    case "subtractOne":
      return { ...state, count: state.count - 1 - parseInt(state.quantity, 0) };

    case "setQuantity":
      return { ...state, quantity: action.payload };
    case "resetCounter":
      return initialState;
    //default:
     // throw new Error();
  }
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubtractOne = () => {
    dispatch({ type: "subtractOne" });
  };

  const handleAddOne = () => {
    dispatch({ type: "addOne" });
  };

  const handleOnChange = (e) => {
    dispatch({ type: "setQuantity", payload: e.target.value });
  };

  const handleResetCounter = () => {
    dispatch({ type: "resetCounter" });
  };

  return (
    <div id={"content-wrapper"} className={"container"}>
      <h1>usereducer</h1>
      <div id={"wrapper"} className={"col"}>
        <div className={"col-1"}>
          <p className="cout">{state.count}</p>
          <div className={"col-2"}>
            <button onClick={handleSubtractOne}>-1</button>
            <button onClick={handleAddOne}>+1</button>
          </div>
        </div>
        <div>
          <div className={"input-col"}>
            <h2>input value</h2>
            <input
              type="text"
              value={state.quantity}
              onChange={handleOnChange}
              className={"input"}
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
