---
marp: true
paginate: true
header: "Front-end Web − Essentials"
---

# 명령형 vs. 선언적 프로그래밍

명령형(Imperative) 프로그래밍과 선언적(Declative) 프로그래밍 비교

---

# HTML 트리(Tree)

기본적인 HTML 데이터 구조를 이해합니다.

- 컴퓨터 과학 관점에서 접근
- 컴퓨터에 정보를 저장하는 기본 데이터 구조
- [노드](https://bit.ly/3RwfXys 'node'), [트리](https://bit.ly/3xocXgY 'tree') 데이터 시각화
- 정보 찾기, 추가, 변경, 삭제 등

![h:240](./assets/html-markup.png) ![h:240](./assets/tree-structure.png)

---

# 브라우저 DOM

웹 문서는 일반적으로 트리 구조로 구성됩니다.

- HTML 해석 후, 컴퓨터 메모리에 HTML 요소를 나타내는 객체 생성
- 생성된 각 객체는 다른 객체 참조(다른 객체의 메모리 위치 기억)
- [DOM](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model 'Document Object Model')은 HTML 문서 분석 후, 사용자에 의해 변경되는 기능 제공
- HTML은 해석된 후 본질적으로 폐기 됨

![h:240](./assets/html-dom-render.png)

---

# DOM 조작(Manipulation)

DOM 조작은 웹 애플리케이션 작동의 기본으로 [Web API](https://developer.mozilla.org/ko/docs/Web/API)를 사용합니다.  
Web API는 브라우저와 상호작용하는 방법(함수, 객체, URL 등)을 제공합니다.

![h:220](./assets/dom-manipulation.png)

##### 실습

☑ HTML 트리 구성 (비순차 목록)
☑ 브라우저 API를 사용해 1초 후, 새 항목 추가

---

# 명령형 프로그래밍

프로그램이 작업을 어떻게(HOW) 수행하는 지를 설명하는 프로그래밍 스타일입니다.

##### 실습

☑ 간단한 카운터 HTML 마크업
☑ 버튼 클릭 이벤트 핸들링 (카운트 업)

```html
<article class="counter">
  <h2>카운터</h2>
  <p>클릭 횟수: <output class="count">0</output>회</p>
  <button type="button" onclick="setCount()" aria-label="카운트 1 증가">
    +1
  </button>
</article>
```

---

# 선언적 프로그래밍

프로그램에서 수행하려는 작업이 무엇(WHAT)인지 선언하는 프로그래밍 스타일입니다.  
선언적 시스템은 항상 명령형 시스템 위에 구축됩니다.

##### 실습

☑ 명령형 프로그래밍을 감싸는 선언적 프로그래밍 구성
☑ 버튼 클릭 이벤트 핸들링 (카운트 업)

```js
const CounterApp = {
  getCount() { ... },
  setCount(nextCount) { ... }
}
```