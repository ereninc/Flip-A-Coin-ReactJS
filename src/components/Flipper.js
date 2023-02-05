import React from "react";
import "../styles/Flipper.css";
import Coin from "./Coin";
import { useState } from "react";
import { flip } from "../helpers/Helper";

function Flipper() {
  const [count, setCount] = useState(0);
  const [coin, setCoin] = useState(flip());

  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);

  return (
    <div className="Flipper">
      <h1 style={{ color: "black" }}>Lets flip a coin!</h1>
      <Coin src={coin} />
      <button
        className="btn btn-primary generate"
        onClick={(e) => {
          handleClick(
            e,
            setCoin,
            coin,
            setCount,
            count,
            setHeadCount,
            setTailCount,
            headCount,
            tailCount
          );
        }}
      >
        Generate
      </button>
      <p style={{ color: "black" }}>
        Number of flips: {count}{" "}
        {count > 0
          ? `, there have been ${headCount} heads and
        ${tailCount} tails`
          : null}
      </p>
    </div>
  );
}

function handleClick(
  e,
  setCoin,
  curCoin,
  setCount,
  currCount,
  setHeadCount,
  setTailCount,
  curHeadCount,
  curTailCount
) {
  e.preventDefault();
  setCoin(flip());
  setCount(currCount + 1);
  if (curCoin.includes("obv")) {
    setHeadCount(curHeadCount + 1);
  } else {
    setTailCount(curTailCount + 1);
  }
}

export default Flipper;
