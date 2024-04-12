// --------------------------------------------------------------------------
// ES Modules

// 🔶 utils 폴더에 아래 유틸리티 함수를 각 파일에 작성하고, 내보내기 구문을 설정합니다.
// 참고: https://mzl.la/3VRmved | https://mzl.la/4aSP27c
//
// utils/
// ├── index.js
// ├── numberWithComma.js
// ├── removeSpaceHTMLString.js
// └── shuffle.js

/**@type {(n: number) => string} */
function numberWithComma(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

/** @type {(htmlString: string) => string} */
function removeSpaceHTMLString(htmlString) {
  return htmlString.replace(/\s+<|\n|>\s+/g, function ($1) {
    return $1.indexOf('<') > -1 ? '<' : $1.indexOf('>') > -1 ? '>' : '';
  });
}

/**@type {(list: any[]) => any[]} */
function shuffle(list) {
  let _ = [...list];
  for (let i = _.length - 1; i > 0; --i) {
    let k = Math.floor(Math.random() * (i + 1));
    [_[k], _[i]] = [_[i], _[k]];
  }
  return _;
}

// --------------------------------------------------------------------------

let price = `${numberWithComma(9643200)}원`;
console.log(price);

const htmlString = /* html */ `
  <div id="es-module">
    <h1>
      <abbr title="ECMAScript">ES</abbr> 모듈
    </h1>
  </div>
`;
console.log(htmlString);
console.log(removeSpaceHTMLString(htmlString));

const range = [...Array(9).keys()];
console.log(range);
console.log(shuffle(range));
