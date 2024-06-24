import { render } from '.';
import state from './state';

const { createElement: h } = React;

export default function Counter(props) {
  const headline = h('h3', null, '카운터');

  const output = h(
    'output',
    {
      className: 'count',
    },
    props.count
  );

  const paragrah = h('p', null, '클릭 횟수:', output, '회');

  const button = h(
    'button',
    {
      type: 'button',
      'aria-label': '카운트 1 증가',
      onClick: () => {
        state.count += 1;
        render();
      },
    },
    '+1'
  );

  return h('article', { className: 'counter' }, headline, paragrah, button);
}
