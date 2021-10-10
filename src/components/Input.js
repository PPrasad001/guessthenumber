import { useState } from "react";
import "./Input.css";

function Input(props) {
  const [inputValue, setInputValue] = useState("");

  function inputChangeHandler(event) {
    setInputValue(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (inputValue.trim().length === 0) {
      props.onEmpty();
    } else {
      const enteredNumber = +inputValue;
      props.onCompare(enteredNumber);
    }
  }

  function restartHandler() {
    setInputValue("");
    props.onRestart();
  }

  return (
    <div className="formDiv">
      <form onSubmit={submitHandler}>
        <input
          type="number"
          value={inputValue}
          min="1"
          max="20"
          onChange={inputChangeHandler}
        />
        <button className="btn">Check</button>
      </form>
      <div className="restart">
        <button onClick={restartHandler}>Restart</button>
      </div>
    </div>
  );
}

export default Input;
