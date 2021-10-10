import "./Header.css";
function Header(props) {
  return (
    <div className="header">
      <h1>Guess the hidden Number</h1>
      <h2>(Between 1 and 20)</h2>
      <div className="hiddenNumber">{props.guess ? props.secret : "?"}</div>
      <p className="message">{props.message}</p>
    </div>
  );
}

export default Header;
