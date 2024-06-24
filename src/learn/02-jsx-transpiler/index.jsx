import { createRoot } from 'react-dom/client';
import state from './state';
import App from './App';

const container = document.getElementById('app');
const reactDomRoot = createRoot(container);

export const render = () => reactDomRoot.render(<App />);

render();

globalThis.reRender = () => {
  state.languageMode = state.languageMode.includes('ko') ? 'en' : 'ko';

  const button = document.querySelector('[onclick="reRender()"]');
  const isKoreanMode = state.languageMode === 'ko';
  button.setAttribute('lang', isKoreanMode ? 'en' : 'ko');
  button.textContent = isKoreanMode
    ? 'Change English Mode'
    : '한글 모드로 변경';

  render();
};
