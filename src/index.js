import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Count = () => {
  const [isBright, setIsDark] = React.useState(true);
  const display = document.querySelector('body');
  display.className = isBright ? "Bright" : "Dark";

  const theme = () => {
    setIsDark(!isBright);
  }

  const [temp, setIsTempCount] = React.useState(70);

  const countIncrease = () => {
    setIsTempCount(temp + 1);
  }
  const countDecrease = () => {
    setIsTempCount(temp - 1);
  }

  return <div>
    <div class="heading">
      Temperature Count
      <label class="switch">
        <input type="checkbox"></input>
        <span onClick={theme} class="slider round"> </span>
      </label>
      <br></br>
      </div>
      <div class="btns">
      <button class="count1" onClick={countIncrease}>+</button>
      <div>{temp}<span class="degree">°C</span></div>
      <button class="count2" onClick={countDecrease}>-</button>
    </div>
    </div>
    
}

ReactDOM.render(<Count />, document.querySelector('#root'))