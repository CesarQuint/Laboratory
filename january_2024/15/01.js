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

class RandomizedSet {
  constructor() {
    this.map = new Map();
    this.list = [];
  }

  insert(val) {
    if (this.map.has(val)) return false;
    this.map.set(val, this.list.length);
    this.list.push(val);
    return true;
  }

  remove(val) {
    if (!this.map.has(val)) return false;
    const idx = this.map.get(val);
    this._swap(idx, this.list.length - 1);
    this.list.pop();
    this.map.set(this.list[idx], idx);
    this.map.delete(val);
    return true;
  }

  getRandom() {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }

  _swap(a, b) {
    const tmp = this.list[a];
    this.list[a] = this.list[b];
    this.list[b] = tmp;
  }
}
