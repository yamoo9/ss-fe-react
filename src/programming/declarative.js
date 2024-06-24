// -----------------------------------------------------------
// 📌 선언적 프로그래밍
// -----------------------------------------------------------

import CounterApp from './CounterApp';

const sectionElement = document.querySelector('.declarative.programming');
const countElement = sectionElement.querySelector('.count');

const counter = CounterApp.init(countElement, 10);

globalThis.updateCount = () => {
  counter.setCount();
};
