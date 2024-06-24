import Counter from './Counter';
import CounterEn from './CounterEn';
import state from './state';

const { createElement: h } = React;

export default function App() {
  let renderComponent = null;
  let count = state.count;

  if (state.languageMode.includes('ko')) {
    renderComponent = h(Counter, { count });
  } else {
    renderComponent = h(CounterEn, { count });
  }

  return h('section', null, h('h2', null, 'React 앱'), renderComponent);
}
