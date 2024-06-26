---
marp: true
paginate: true
header: "Front-end Web − Essentials"
---

# 테스트 프레임워크

[Vitest](https://vitest.dev/)는 차세대 테스트 프레임워크입니다. ([Jest](https://jestjs.io/) API 호환)

![h:280](https://vitest.dev/logo-shadow.svg)

---

# Vitest 설치

[Vitest](https://npmjs.com/package/vitest) 패키지를 프로젝트에 설치합니다. ([참고](https://vitest.dev/guide/#adding-vitest-to-your-project))

```sh
pnpm add vitest -D
```

### package.json

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui"
  }
}
```

---

# VS Code 확장 설치

Vitest 및 Vitest 스니펫 확장을 설치합니다.

- [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)
- [VitesVitest Snippetst](https://marketplace.visualstudio.com/items?itemName=deinsoftware.vitest-snippets)

---

# 유틸리티 함수 테스트 작성

유틸리티 함수 테스트 코드를 작성합니다. ([참고](https://vitest.dev/guide/#writing-tests))

##### 실습

☑ numberWithComma 함수 테스트
☑ currency 함수 테스트
☑ getPublic 함수 테스트

---

# 컴포넌트 테스트 환경 구성

React 컴포넌트 테스트 환경을 구성합니다. ([참고](https://euid.notion.site/Vitest-76d0bbb33678404f9225fdd3dc883524?pvs=4))

#### 참고

- [Testing Library](https://testing-library.com)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [user-event](https://testing-library.com/docs/user-event/intro)
- [jest-dom](https://github.com/testing-library/jest-dom?tab=readme-ov-file#readme)

---

# 컴포넌트 테스트

React 컴포넌트 테스트 코드를 작성합니다. ([참고](https://euid.notion.site/Testing-Library-c5948112cc3349d294a3ec0320778b36?pvs=4))

- 컴포넌트 렌더(render)
- 컴포넌트 렌더 후 DOM 요소 선택
- 렌더 결과 및 사용자 인터랙션 테스트
- 구현 방법이 아닌, 작동(앱이 수행하는 작업) 테스트

##### 실습

☑ Avatar 컴포넌트 테스트
☑ AvatarList 컴포넌트 테스트

---

## 쿼리

- getBy
- queryBy
- findBy

## 쿼리 베리에이션

- ByRole
- ByText
- ByPlaceholderText
- ByTestId

---

## 매처 함수

- toBeInTheDocument()
- toBeEmptyDOMElement()
- toHaveTextContent()
- toHaveAttribute()
- toBeDisabled()
- toBeChecked()