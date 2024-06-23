// --------------------------------------------------------------------------
// Virtual DOM

// 🔶 lib 폴더에 아래 유틸리티 함수를 각 파일에 작성하고, 내보내기 구문을 설정합니다.
//
// lib/
// ├── virtual/
// │   ├── createElement.js
// │   └── index.js
// ├── virtual-dom/
// │   ├── VirtualDomRoot.js
// │   ├── createRoot.js
// │   └── index.js
// └── index.js

function createElement(type, props, ...children) {
  return {
    $$typeof: Symbol('virtual.element'),
    type,
    key: props?.key ?? null,
    props: { ...props, children: [...(props?.children ?? []), ...children] },
  };
}

class VirtualDomRoot {
  #rootElement;

  constructor(rootElement) {
    this.#rootElement = rootElement;
  }

  #parseVNode(vNode) {
    if (typeof vNode === 'string') return vNode;

    const { type, props } = vNode;

    const element = document.createElement(type);
    const children = props.children;
    delete props.children;

    Object.entries(props).forEach(([key, value]) => {
      if (key === 'className') {
        element.classList.add(value);
      } else {
        element.setAttribute(key, value);
      }
    });

    children.forEach((child) => {
      if (typeof child === 'string') {
        element.append(child);
      } else {
        element.append(this.#parseVNode(child));
      }
    });

    return element;
  }

  render(vNode) {
    const parsedElements = this.#parseVNode(vNode);
    this.#rootElement.append(parsedElements);
  }

  umount() {
    Array.from(this.#rootElement.children).forEach((child) => child.remove());
  }
}

function createRoot(rootElement) {
  return new VirtualDomRoot(rootElement);
}
