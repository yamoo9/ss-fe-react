// -----------------------------------------------------------
// 📌 명령형 프로그래밍
// -----------------------------------------------------------

const sectionElement = document.querySelector('.imperative.programming');
const countElement = sectionElement.querySelector('.count');

let count = 6;

const getCount = () => {
  return Number(countElement.textContent);
};

const setCount = (nextCount) => {
  if (!nextCount) {
    const count = getCount();
    countElement.textContent = String(count + 1);
  } else {
    countElement.textContent = String(nextCount);
  }
};

setCount(count);

globalThis.setCount = () => {
  setCount();
};
