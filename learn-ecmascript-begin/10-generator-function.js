// --------------------------------------------------------------------------
// generator function → Generator { next }

// 아래 함수는 피보나치 수열 중 특정 인덱스를 반환합니다.
const fibonacci = (n = 0) =>
  n < 1 ? 0 : n < 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

let i = 0;
while (i < 10) {
  console.log(fibonacci(i));
  i += 1;
}

// 피보나치 수열을 배열로 반환하는 makeFibonacciArray 함수입니다.
function makeFibonacciArray(n) {
  let i = 0, list = [];
  while (i <= n) list.push(fibonacci(i++));
  return list;
}

console.log(makeFibonacciArray(14));

// [Q]
// 피보나치의 특정 수를 도출하는 것이 아니라,
// 피보나치 수열의 각 값을 배열로 나열하려면 어떻게 해야 할까요?

// [A]
// 피보나치 수열을 배열로 반환하는 fibonacciGenerator 함수를 작성합니다.
// 그리고 피보나치 수열의 값을 배열로 만들어 Console 출력해봅니다.

// 🔶 제너레이터 함수
// 참고: https://mzl.la/3vZFLeK

function* fibonacciGenerator(n) {
  let i = 0;
  while (i <= n) {
    yield fibonacci(i++);
  }
}

// const fibo14Array = fibonacciGenerator(14);
// console.log(fibo14Array);
