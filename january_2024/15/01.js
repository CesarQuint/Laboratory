var lemonadeChange = function (bills) {
  let change = { 5: 0, 10: 0 };
  for (let bill of bills) {
    if (bill == 5) change[5]++;
    else if (bill == 10) {
      if (!change[5]) return false;
      change[10]++;
      change[5]--;
    } else {
      //bill==20
      if (change[5] && change[10]) {
        // first way for giving change: bill of 10 + bill of 5
        change[10]--;
        change[5]--;
      } else if (change[5] >= 3) {
        // second way for giving change: 3 bills of 5
        change[5] -= 3;
      } else return false;
    }
  }
  return true;
};
