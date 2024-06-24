import { render } from '.';
import state from './state';

export default function Counter({ count }) {
  const handleClick = () => {
    state.count += 1;
    render();
  };

  return (
    <article className="counter">
      <h3>카운터</h3>
      <p>
        클릭 횟수: <output className="count">{count}</output>회
      </p>
      <button type="button" aria-label="카운트 1 증가" onClick={handleClick}>
        +1
      </button>
    </article>
  );
}
