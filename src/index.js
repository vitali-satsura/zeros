module.exports = function zeros(expression) {
  // your solution
  let expArray = expression.split("*");
  let zeros = 0;
  let oddCount = 0;

  for (let i = 0; i < expArray.length; i++) {
    if (expArray[i].includes("!!")) {
      let a = parseInt(expArray[i]);
      if ((a % 2) !== 0) oddCount++;
      while (a >= 5) {
        let n = 5;
        while ((a % n) === 0) {
          zeros++;
          n *= 5;
        }
        a -= 2;
      }
    } else if (expArray[i].includes("!")) {
      let a = parseInt(expArray[i]);
      while (a > 0) {
        a = Math.floor(a / 5);
        zeros += a;
      }

    }
  }

  if (oddCount === expArray.length) {
    return 0;
  }

  return zeros;
}
