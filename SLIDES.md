---
marp: true
header: Vite Scaffolding
paginate: true
---

# Vite 스캐폴딩

차세대 프론트엔드 개발 도구인 [Vite](https://ko.vitejs.dev)를 사용해 학습 환경 스캐폴딩

---

# Vite 개발 환경 구성

ES Modules 기반 개발 서버 및 빌드 시스템 제공

- [Vite를 사용해야 하는 이유](https://ko.vitejs.dev/guide/why.html)
- [esbuild 번들러](https://esbuild.github.io/)
- [Rollup 번들러](https://rollupjs.org/)
- [빌드 도구 순위](https://2023.stateofjs.com/en-US/libraries/build_tools/)

---

# `index.html` 파일 작성 

- [index.html & 프로젝트 루트](https://ko.vitejs.dev/guide/#index-html-and-project-root)

```html
<body class="learn">
  <main>
    <h1>리액트 러닝 가이드</h1>
    <p>리액트 라이브러리를 사용해 사용자 인터페이스를 구축하는 방법을 학습합니다.</p>
    <a 
      class="button"
      href="https://react.dev"
      rel="noopener noreferrer"
      target="_blank"
    >
      react.dev
    </a>
  </main>
</body>
```

---

# `public/react.svg` 파일 작성 

- [public 디렉터리](https://ko.vitejs.dev/guide/assets.html#the-public-directory)
- [React 로고 SVG](https://gist.github.com/yamoo9/36e22392576ccf4fd193d968c08a7558)

---

# `src/styles/globals.css` 파일 작성 

- [globals.css](https://gist.github.com/yamoo9/84571c5be96b7c6debb270ae403fdd75)
- [Cascade Layers](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Cascade_layers)

---

# `src/main.js` 파일 작성

- [URL을 통해 에셋 가져오기](https://ko.vitejs.dev/guide/assets.html#importing-asset-as-url)

---

# vite 패키지 설치

[vite](https://www.npmjs.com/package/vite) 패키지 설치 명령

```sh
pnpm add vite -D # --save-dev
```

---

# `package.json` 파일 수정

- [모듈 기본 타입 설정](https://nodejs.org/api/packages.html#type)
- [NPM 스크립트 명령 등록](https://ko.vitejs.dev/guide/#command-line-interface)

---

# `vite.config.js` 파일 작성 

- [Vite 설정하기](https://ko.vitejs.dev/config/#configure-vite)
- [공용 옵션](https://ko.vitejs.dev/config/shared-options.html)
  - [base](https://ko.vitejs.dev/config/shared-options.html#base)
  - [publicDir](https://ko.vitejs.dev/config/shared-options.html#publicdir)
  - [css.devSourcemap](https://ko.vitejs.dev/config/shared-options.html#css-devsourcemap)
- [서버 옵션](https://ko.vitejs.dev/config/server-options.html)
  - [server.port](https://ko.vitejs.dev/config/server-options.html#server-port)

---

# `.env.development` 파일 작성 

- [`.env` 파일들](https://ko.vitejs.dev/guide/env-and-mode.html#env-files)
- [HTML 환경 변수 대체](https://ko.vitejs.dev/guide/env-and-mode.html#html-env-replacement)
- [설정에서 환경 변수 사용](https://ko.vitejs.dev/config/#using-environment-variables-in-config)
- [envDir](https://ko.vitejs.dev/config/shared-options.html#envdir)
- [envPrefix](https://ko.vitejs.dev/config/shared-options.html#envprefix)
