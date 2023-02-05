const heads =
  "https://www.pcgs.com/UserImages/1884cc%20Silver%20Dollar%20obv.jpg";
const tails =
  "https://www.pcgs.com/UserImages/1884cc%20Silver%20Dollar%20rev.jpg";
const coin = "https://www.pcgs.com/UserImages/1884cc%20Silver%20Dollar%20";

function flip() {
  const coinSrc = `${coin}${Math.random() > 0.5 ? "obv" : "rev"}.jpg`;
  return coinSrc;
}

export { flip };
