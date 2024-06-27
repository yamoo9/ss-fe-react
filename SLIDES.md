---
marp: true
paginate: true
header: "Front-end Web − Essentials"
---

# 컴포넌트 속성 검사

[prop-types](https://www.npmjs.com/package/prop-types) 패키지를 사용해 React 컴포넌트에 전달된 속성 타입을 검사하고 문서화할 수 있습니다. 
prop-types로 정의된 타입과 비교해 일치하지 않을 경우 개발 중 경고 메시지를 출력합니다.

```sh
pnpm add prop-types
```

```jsx 
import PropTypes from 'prop-types';

function Component(props) {/* ... */}

Component.propTypes = {/* 타입 검사 */}
```

---

# Ref로 값 참조

컴포넌트 렌더링(함수 실행) 시, 변경된 값을 기억하고 싶지만
다시 렌더링되지 않도록 하려 할 때 [React.useRef](https://ko.react.dev/reference/react/useRef) 훅을 사용할 수 있습니다.

```jsx
const refObject = useRef(''); // { current: '' }

const handleClick = () => {
  refObject.current = '버튼을 클릭해 이 함수가 실행되어 값이 변경되어도';
  refObject.current = '컴포넌트는 다시 렌더링하지 않습니다.';
}
```

---

## 참조(ref) vs. 상태(state)

참조와 상태는 다릅니다. 
컴포넌트 실행 시 수정 불가능한 상태와 달리 참조는 수정 가능합니다.
다만, 렌더링 중 참조의 `current` 값을 읽거나 쓰지 않아야 합니다. ([참고](https://ko.react.dev/learn/referencing-values-with-refs#differences-between-refs-and-state))

참조를 useState 훅으로 구성하면 다음 코드와 같습니다.

```jsx 
const [likeRef] = useState({ current: '' });
```

`likeRef`는 변경할 수 없는 상태 값이지만, `current` 속성 값은 변경 가능합니다.
매 렌더링 과정에서 기억되는 상태이므로 `current` 값도 기억합니다.
다만, 업데이트 함수를 사용하지 않아 리-렌더 요청하지 않습니다.

---

## 참조(ref) 사용시 주의할 점

- 참조(ref)는 React 외부 시스템이나 웹 API 작업 시 유용합니다.
- React 렌더링에 직접 관여되어서는 안됩니다. (예측이 어려움)
  렌더링과 관련된다면 상태(state)를 사용해야 합니다.

---

# Ref로 DOM 참조

React는 컴포넌트 렌더링 결과에 맞게 DOM 변경을 자동 처리하므로
실제 DOM에 접근하지 않습니다. 하지만 사용자와 상호작용에서 요구되는
접근성을 준수하려면 컴포넌트에서 실제 DOM에 접근해야 하는 경우가 많습니다.

- 초점 이동
- 스크롤 위치 변경
- 애니메이션

이런 경우 useRef 훅으로 생성된 참조(ref) 객체를 사용해 
실제 DOM 노드를 참조하여 접근 및 조작할 수 있습니다.

---

## DOM 노드 접근/조작

useRef 훅을 사용해 참조 객체를 생성하고 JSX 엘리먼트 `ref` 속성에 연결하면
DOM 커밋 이후 실제 DOM 노드를 참조 객체의 `current` 속성으로 참조할 수 있습니다.

```jsx 
const inputRef = useRef(null);

const handleClick = () => {
  // 버튼 클릭 시, inputRef의 현재 참조에 초점 이동
  inputRef.current.focus();
}
```

```html
<input ref={inputRef} type="search" />
```

---

## Ref 콜백

이 방법은 `ref` 속성에 함수를 연결하는 것을 말합니다.
React는 DOM 커밋 후, `ref` 속성에 연결된 콜백 함수를 호츨합니다.
콜백 함수는 커밋 이후 실제 DOM 노드를 매개변수로 전달받습니다. ([참고](https://codesandbox.io/p/sandbox/modest-torvalds-6g6t9r?file=%2Fsrc%2FApp.js%3A42%2C31&utm_medium=sandpack))

```html
<input 
  ref={(element) => {
    console.log(element); // <input /> 참조
  }} 
  type="search" 
/>
```

---

## 다른 컴포넌트의 DOM 노드에 접근

React는 기본적으로 다른 컴포넌트의 DOM 노드에 접근하는 것을 허용하지 않습니다.
직접 다른 컴포넌트의 DOM 노드를 조작하는 것은 문제를 유발할 수 있기 때문입니다.

하지만 특정 컴포넌트에 접근이 필요한 경우, 선택적으로 다른 컴포넌트의 
DOM 노드에 접근할 수 있는 방법([React.forwardRef](https://ko.react.dev/reference/react/forwardRef))을 제공합니다.

```jsx 
// 컴포넌트의 2번째 매개변수로 ref가 전달됨
function Component(props, ref) { /* ... */ }

export default forwardRef(Component);
```

---

## 명령형 방식으로 일부 API 노출

컴포넌트의 DOM을 모두 외부에 노출하는 대신, 명령형 방식의 일부 API만 노출하도록 하여
컴포넌트의 DOM을 외부에서 직접 조작하는 예상치 못한 작업을 방지할 수도 있습니다.
이런 경우 [React.useImperativeHandle](https://ko.react.dev/reference/react/useImperativeHandle) 훅을 사용합니다. ([참고](https://ko.react.dev/learn/manipulating-the-dom-with-refs#exposing-a-subset-of-the-api-with-an-imperative-handle))

```jsx
const inputRef = useRef(null);

useImperativeHandle(ref, () => ({
  // <input />을 전부 노출하는 대신, 
  // 초점 부여 명령형 핸들만 외부에 공개
  focus() { inputRef.focus() }
}))
```

---

# 이펙트 동기화

일부 컴포넌트에선는 외부 시스템과 동기화해야 할 수 있습니다.
예를 들어 React의 외부 시스템인 서버와의 연결이 그러합니다.

이런 경우 이펙트(effects)를 사용해 렌더링 이후,
특정 코드를 실행해 외부 시스템과 컴포넌트를 동기화 할 수 있습니다.

---

## 이펙트 vs. 이벤트

컴포넌트 내부는 크게 2가지 로직으로 구성됩니다.

- 렌더링 코드 (**UI 표현** → `props`, `state`를 통해 JSX 반환, 순수함 요구됨)
- 이벤트 핸들러 (**상호작용** → 컴포넌트 내부 함수, 사이드 이펙트 포함)

하지만 이것만으로는 충분하지 않습니다.
서버에 접속하는 것은 순수한 계산이 아니고, 사이드 이펙트를 유발합니다.
그러므로 렌더링(순수한 계산)만으로는 이를 처리할 수 없습니다.

이펙트는 이벤트와 달리, 특정 이벤트가 아닌 렌더링에 의해 직접 발생합니다.
서버에 연결 설정하는 것은 이벤트가 아니라, 이펙트(effects)입니다.
이펙트는 DOM 커밋, 화면 업데이트가 이루어진 다음 실행됩니다.

---

## 이펙트 작성

이펙트 작성은 다음 3단계를 따릅니다.
이 중 의존성 및 클린업 함수 설정은 선택사항입니다.

1. 이펙트 선언
1. 이펙트 의존성 설정 (옵션)
1. 클린업 함수 설정 (옵션)

---

### 이펙트 선언

컴포넌트에서 이펙트를 선언하려면 [React.useEffect](https://ko.react.dev/reference/react/useEffect) 훅을 사용합니다.

```jsx 
import { useEffect } from 'react';

function Component {

  // 이펙트 선언
  useEffect(() => {
    // 여기에 작성된 코드는 DOM 커밋 이후 실행 됨
  });

  return <>/* ... */</>
}

```

---

### 이펙트 의존성 설정

기본적으로 이펙트는 렌더링 될 때마다 실행됩니다.
그러므로 불필요하게 이펙트가 실행되지 않도록 하려면?

useEffect 훅의 두번째 인수로 의존성 배열을 설정합니다.
배열에는 [React가 반응하는 값](https://ko.react.dev/learn/lifecycle-of-reactive-effects#all-variables-declared-in-the-component-body-are-reactive)을 설정할 수 있습니다.

```jsx
useEffect(
  () => { /* ... */}, 
  // 의존하는 상태 또는 컴포넌트 속성 설정
  // 배열이 빈 경우, DOM 커밋 이후 1회만 실행 됨
  // 반응하는 값(컴포넌트 속성, 상태, 파생된 상태 등) 설정 가능
  []
);
```

---

### 클린업 함수 

컴포넌트가 마운트 될 때 무언가 연결하고, 언마운트 될 때 무언가 해제해야 할 수 있습니다.
이런 경우, 이펙트 콜백 함수에서 반환하는 함수를 설정해 내부에서 클린업합니다.

```jsx 
useEffect(() => {
  const handler = () => { /* ... */ };

  globalThis.addEventListener('mouseenter', handler);

  // 클린업 함수 설정
  return () => {
    globalThis.removeEventListener('mouseenter', handler);
  }
}, []);
```

---

## React 훅 규칙 검사 ESLint 플러그인

[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) 패키지를 설치해 검사를 수행하면 문제 확인이 수월해집니다.

```sh
pnpm add eslint-plugin-react-hooks
```

이 플러그인은 ESLint 9 구성을 아직 지원하지 않습니다. ([참고](https://github.com/facebook/react/issues/28313))
그러므로 현 시점(2024. 6)에서는 ESLint 8 구성을 사용해야 합니다.

```sh
npm init @eslint/config # ESLint 8 구성
```

```sh
npm init @eslint/config@latest # ESLint 9 구성
```

---

## 애플리케이션 초기화

일부 로직은 애플리케이션 시작 전에 한 번만 실행되어야 합니다.
이런 로직은 컴포넌트 외부에 배치합니다. 해당 로직은 브라우저에서 
앱을 로드한 후 한 번만 실행됨이 보장됩니다.

```jsx 
// 브라우저에서 실행 중인지 확인
if (globalThis !== undefined) {
  // 애플리케이션 초기화 로직 작성
}

function App() {
  // ...
}
```

---

# 커스텀 훅

React는 useState, useEffect와 같은 훅을 제공합니다.
하지만 실제 프로젝트에서는 더 많은 훅 함수가 필요할 수 있습니다. 

예를 들어 데이터를 가져오거나, 사용자 온라인 상태 유무를 확인하거나 
또는 로컬 스토리지 데이터를 읽거나 쓸 수 있는 기능을 포함하는 것을요.

React는 이러한 훅 함수를 제공하지 않으므로 사용자가 필요하다면 
직접 자신이 훅 함수를 만들어 사용할 수 있습니다.

커스텀 훅은 여러 컴포넌트에서 로직을 재사용할 수 있게 합니다.

---

## 훅 작성 규칙

커스텀 훅 함수를 작성한다면 다음의 규칙을 고려해야 합니다. ([참고](https://ko.react.dev/learn/reusing-logic-with-custom-hooks#recap))

- 훅 함수 이름은 항상 `use`로 시작해야 합니다. (일반 함수와 구분)
- 함수 컴포넌트 또는 다른 훅 함수 안에서만 훅 함수를 사용할 수 있습니다.
- 함수 컴포넌트, 다른 훅 함수 내부 최상위 계층에서만 사용 가능합니다.
- 커스텀 훅을 통해 전달받는 이벤트 핸들러는 이펙트로 감싸야 합니다.
- 조건(예: if문) 뒤에 혹 함수가 위치할 수 없습니다.
- 훅 함수는 컴포넌트와 마찬가지로 순수해야 합니다.