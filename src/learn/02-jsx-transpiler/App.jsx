import Counter from './Counter';
import CounterEn from './CounterEn';
import state from './state';

export default function App() {
  const count = state.count;
  const isKoreanMode = state.languageMode.includes('ko');

  return (
    <section>
      <h2>React 앱</h2>
      {isKoreanMode ? <Counter count={count} /> : <CounterEn count={count} />}
    </section>
  );
}
