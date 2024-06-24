import { render } from '.';
import state from './state';

const { createElement: h } = React;

export default function CounterEn(props) {
  const headline = h('h3', null, 'Counter');

  const output = h(
    'output',
    {
      className: 'count',
    },
    props.count
  );

  const paragrah = h('p', null, 'Clicks:', output);

  const button = h(
    'button',
    {
      type: 'button',
      'aria-label': 'Increase count by 1',
      onClick: () => {
        state.count += 1;
        render();
      },
    },
    '+1'
  );

  return h('article', { className: 'counter' }, headline, paragrah, button);
}
