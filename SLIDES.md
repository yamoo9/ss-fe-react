---
marp: true
paginate: true
header: "Front-end Web − Essentials"
---

# JSX 마크업(Markup)

React 컴포넌트는 React가 마크업을 포함할 수 있는 JavaScript 함수입니다. 
개발자가 보다 쉽게 마크업을 표현하기 위해 JSX라는 확장된 문법을 사용할 수 있습니다.
JSX는 HTML과 매우 유사하지만 좀 더 엄격하며 동적인 정보를 표시할 수 있습니다.

그러므로 HTML 마크업을 React 컴포넌트에 그대로 붙여넣으면 작동 안할 수 있습니다.

##### 실습

☑ [HTML 마크업](https://gist.github.com/yamoo9/682b4e71f6becd970196532d4efee190)
☑ [검색 아이콘](https://iconmonstr.com/search-thin-svg/)

---

# JSX 규칙(Rules)

1. 컴포넌트는 여러 엘리먼트를 반환할 수 없고, 단 하나의 루트 엘리먼트만 반환 가능
1. 모든 요소는 열고 닫아야 하며, 셀프 클로징(Self Closing)이 필요함
1. `class` 속성은 `className`으로 사용해야 함 (JavaScript 예약어이기 때문)
1. 대부분의 경우 속성 이름은 카멜케이스로 사용. `aria-*`, `data-*`는 하이픈(`-`) 사용
1. 데이터를 JSX에 끼워 넣을 때는 중괄호(`{}`) 사용
1. `null`을 반환할 경우 아무 것도 표시 안함

##### 실습

☑ 단 하나의 루트 엘리먼트로 감싸야 하는 이유 (JSX → React.createElement 검토)
☑ <div> 남용 대신, <React.Fragment> 컴포넌트 활용 (단축 표현: `<></>`)

---

# HTML → JSX 컨버터(Convertor)

기존 HTML 마크업에서 JSX로 변환하는 것은 번거로울 수 있습니다.
HTML → JSX 컨버터를 사용하면 손쉽게 변환이 가능하니 활용을 추천합니다.

- [HTML to JSX](https://transform.tools/html-to-jsx) 온라인 컨버터 활용
- [html to JSX](https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx) VS Code 확장 활용

---

# JSX 마크업 실습

React 원론에 대해 살펴본 후, 디자인 → 개발 핸드오프(handoff)를 실습합니다.

![h:400](./.slides/assets/jsx-markup-guide.gif)

---

# 조건부 렌더링

JSX는 일반 JavaScript를 사용하는 구문 확장이므로
JavaScript의 기본 구문을 사용해 동일하게 조건부 렌더링 할 수 있습니다.

1. if문 활용
1. 3항 연산자 활용
1. 논리 연산자 활용

##### 실습

☑ 인증 유무에 따른 화면 변경
☑ 아바타(Avatar) 온라인 상태 표시 (참고: [Figma](https://www.figma.com/))

---

# 리스트 렌더링

배열 또는 객체 데이터를 순환해 렌더링해야 하는 일은 빈번합니다.
이런 경우 JavaScript의 기본 구문을 사용해 리스트를 렌더링 할 수 있습니다.

1. 배열 리스트 렌더링
1. 객체 리스트 렌더링

##### 실습

☑ 아바타(Avatar) 리스트 렌더링
☑ 상품(Product) 리스트 렌더링 ([참고](https://gist.github.com/yamoo9/d94f140320402b63d99994436a75093d))