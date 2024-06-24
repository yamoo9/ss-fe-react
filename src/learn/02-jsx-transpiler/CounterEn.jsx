import { render } from '.';
import state from './state';

const { createElement: h } = React;

export default function CounterEn({ count }) {
  const handleClick = () => {
    state.count += 1;
    render();
  };

  return (
    <article className="counter" lang="en">
      <h3>Counter</h3>
      <p>
        Clicks: <output className="count">{count}</output>
      </p>
      <button
        type="button"
        aria-label="Increase count by 1"
        onClick={handleClick}
      >
        +1
      </button>
    </article>
  );
}
