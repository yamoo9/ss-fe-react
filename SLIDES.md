---
marp: true
paginate: true
header: "Front-end Web − Essentials"
---

# React, React DOM 패키지 설치

```sh
pnpm add react react-dom
```

- [react](https://npmjs.com/package/react)
- [react-dom](https://npmjs.com/package/react-dom)

#### 타입 정의 설치

```sh
pnpm add @types/{react,react-dom} -D
```

- [@types/react](https://shorturl.at/xBQag)
- [@types/react-dom](https://shorturl.at/83nu7)

---

# React용 ESLint 구성

ESLint 린터 도구를 React용으로 구성 (대화형)

```sh
npm init @eslint/config@latest
```

- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#configuration-new-eslintconfigjs)

---

# React용 Vite 플러그인 설치

React 프로젝트 Vite 플러그인 설치 및 구성

```sh
pnpm add @vitejs/plugin-react -D
```

- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)