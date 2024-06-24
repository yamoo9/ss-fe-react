// const CounterApp = {
//   init(count, value = 0) {
//     this._count = count;
//     this._value = value;
//     this.setCount(this._value);

//     return this;
//   },
//   getCount() {
//     return Number(this._count.textContent);
//   },
//   setCount(nextCount) {
//     if (!nextCount) {
//       const count = this.getCount();
//       this._count.textContent = String(count + 1);
//     } else {
//       this._count.textContent = String(nextCount);
//     }
//   },
// };

class CounterApp {
  #count;
  #value;

  static init(...args) {
    return new CounterApp(...args);
  }

  constructor(count, initialCountValue = 0) {
    this.#count = count;
    this.#value = initialCountValue;
    this.setCount(this.#value);
  }

  getCount() {
    return Number(this.#count.textContent);
  }

  setCount(nextCount) {
    if (!nextCount) {
      const count = this.getCount();
      this.#count.textContent = String(count + 1);
    } else {
      this.#count.textContent = String(nextCount);
    }
  }
}

export default CounterApp;
