import React from "react";
import "./style.css";
import  {useState} from 'react';

function Counter() {
let [countNum, setCount] = useState(0);
let increaseValaue = () => {
setCount((countNum += 1)); //increases the count by 1
};
let decreaseValue = () => {

setCount((countNum -= 1)); 

};// decreases the count by 1
let resetValue = () => {
setCount(0); //resets the count to 0
};
return (
<div>
<h1> {countNum} </h1>
<button onClick={increaseValaue}>+</button> 
<button onClick={decreaseValue}>-</button>

<button onClick={resetValue}>Reset</button>
</div>
)
}
export default Counter;