import { useState } from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import Score from "./components/Score";
import "./App.css";
let secretNumber = Math.floor(Math.random() * 20 + 1);
let highScore = 0;

function App() {
  const [score, setScore] = useState(20);
  const [isGuessCorrect, setGuessIsCorrect] = useState(false);
  const [message, setMessage] = useState("Start guessing...");

  function compareInputToSecret(num) {
    if (num === secretNumber) {
      setGuessIsCorrect(true);
      setMessage("Correct guess");
      if (score > highScore) highScore = score;
    }
    if (num !== secretNumber) {
      if (score > 1) {
        setScore((prevScore) => prevScore - 1);
        setMessage(num > secretNumber ? "Too high" : "Too low");
      } else {
        setScore(0);
        setMessage("You lose");
      }
    }
  }

  function restartHandler() {
    setScore(20);
    setGuessIsCorrect(false);
    setMessage("Start guessing...");
    secretNumber = Math.floor(Math.random() * 20 + 1);
  }

  function emptyInput() {
    setMessage("Please enter a number");
  }

  return (
    <div
      className="parent"
      style={{ backgroundColor: isGuessCorrect ? "green" : "black" }}
    >
      <Header message={message} guess={isGuessCorrect} secret={secretNumber} />
      <Input
        onCompare={compareInputToSecret}
        onEmpty={emptyInput}
        onRestart={restartHandler}
      />
      <Score score={score} highScore={highScore} />
    </div>
  );
}

export default App;
