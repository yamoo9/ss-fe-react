---
marp: true
paginate: true
header: ECMAScript Essentials
---

# ECMAScript

React 개발에 자주 사용되는 ECMAScript 언어 사양

---

# Block Scope

블록 스코프의 범위를 가지는 지역 변수 및 상수

- [var](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/var), [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let) 비교
- [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)를 사용하는 이유

---

# Template Literal

표현식을 허용하는 문자열 리터럴(값)

- 데이터 + 템플릿 → 마크업 스트링
- [템플릿 리터럴](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals) 구문을 사용해 마크업 스트링 생성

---

# New Operators

효율적인 조건 처리에 사용되는 연산자

- [널 병합 연산자](https://mzl.la/3vQUYin) → [`null`, `undefined`](https://mzl.la/3PXiOQ9) 처리 조건 연산자 활용
- [옵셔널 체이닝](https://mzl.la/3xx6Arc) → 선택적 연결 구문 활용

---

# Spread Syntax

배열, 객체 또는 문자와 같은 데이터를 전개 합성(복사)

- [전개 구문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)을 사용해 배열 병합
- 전개 구문을 사용해 객체 병합

---

# Destructuring Assignment

배열 또는 객체 속성을 해체, 그 값을 개별 변수에 할당하는 표현식

- [구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 구문을 사용해 배열의 개별 항목 분해 및 할당
- 구조 분해 할당 구문을 사용해 객체의 개별 항목 분해 및 할당
- 콜백 함수의 매개변수를 구조 분해 할당하여 활용

---

# Arrow Function

 함수 표현식에 대한 간결한 대안, 약간의 의미적 차이와 의도적 사용상의 제한을 가짐

- [화살표 함수 표현식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

# Default Parameters

값이 전달되지 않거나 `undefined`인 경우 명명된 매개변수를 기본값으로 초기화

- [기본값 매개변수](https://mzl.la/3JkRZBH)

---

# Rest Parameters

함수가 정해지지 않은 수의 매개변수를 배열로 설정

- [나머지 매개변수](https://mzl.la/43Ro9yp)

---

# Iteration Protocols

순회 프로토콜은 새로운 내장 객체 또는 구문이 아닌 프로토콜

- [순회 가능(iterable) 프로토콜](https://mzl.la/4d4Uyps)
- [반복자(iterator) 프로토콜](https://mzl.la/49DSy4q)

---

# Promise & Async - Await

비동기(지연된) 작업 처리

- [Callback Hell](https://bit.ly/3r5iUfe)
- [Promise](https://mzl.la/3d1He5h)
- [Async function](https://mzl.la/49EvJxn)
- [Promise.all](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [Promise.race](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

---

# Class

class 선언은 프로토타입(Prototype) 기반 상속을 사용, 클래스 생성

- [객체 지향 JavaScript](https://mzl.la/3UdwrNE)
- [class 선언](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/class)
- [class 식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/class)

---

# ES Modules

JavaScript 모듈 내보내기, 가져오기

- [export](https://mzl.la/3VRmved)
- [import](https://mzl.la/4aSP27c)

---

# Virtual DOM

실제 DOM(DOM의 가상 표현)의 경량 복사본

- [Virtual DOM](https://www.google.com/search?newwindow=1&sca_esv=3934d71341ac1ffa&rlz=1C5CHFA_enKR884KR884&sxsrf=ADLYWIKtckGxJozLyDuYlOc26i5M6Unnmg:1719141420879&q=virtual+dom&udm=2&fbs=AEQNm0DmKhoYsBCHazhZSCWuALW8l8eUs1i3TeMYPF4tXSfZ96qP8jk59Ek0sz1u1YABeO97Kg_HO-KtF2S8ZC2gd6OMgxanGK0ucuQE0TMKSErHKTHlkmhWbehxw6xgUANgNy66jQKMSb25bBpp_xWfZt7iEZDHzOgFoIjX7RmP7YxhqMGQH6TjdkV2HTkzt4LnbM2NtSUw&sa=X&ved=2ahUKEwid79btzPGGAxV_iFYBHS9VD-gQtKgLegQICxAB&biw=1792&bih=1008&dpr=2)
- [DOM](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model)

---

# Web Component

기능을 캡슐화하여 재사용 가능한 커스텀 엘리먼트 생성

- [웹 컴포넌트](https://mzl.la/3YjFdu9)
- [webcomponents.org](https://www.webcomponents.org)

---

# 도구 설치

개발자 경험 향상을 위한 도구 설치

- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)