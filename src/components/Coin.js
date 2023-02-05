import React from "react";
import "../styles/Coin.css";

function Coin(props) {
  return (
    <div>
      <img className="Coin" src={props.src} alt={"best coin pic ever"} />
    </div>
  );
}

export default Coin;
