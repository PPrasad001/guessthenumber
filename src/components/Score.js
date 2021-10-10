import "./Score.css";

function Score(props) {
  return (
    <div className="score">
      <p>Score : {props.score}</p>
      <p>HighScore : {props.highScore}</p>
    </div>
  );
}

export default Score;
