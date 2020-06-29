const money1 = function(w) {
  const moneyArr = [1, 5, 10, 20, 50, 100];
  const result=[];
  function help (_money) {
    let index = moneyArr.length - 1;
    while (index >= 0) {
      if (_money < moneyArr[index]) {
        index--;
      } else {
        help(_money - moneyArr[index]);
        result.push(moneyArr[index]);
        break;
      }
    }
  }
  help(w);
  return result.length;
}

const money2 = function(w) {
  const f=[0];
  for (let i = 1; i <= w; i++) {
    let cost = Infinity;
    if (i - 1 >= 0) cost = Math.min(cost, f[i-1] + 1);
    if (i - 5 >= 0) cost = Math.min(cost, f[i - 5] + 1);
    if (i - 11 >= 0) cost = Math.min(cost, f[i - 11] + 1);
    f[i] = cost;
  }
  return f[w];
}

console.log('result:', money2(15));