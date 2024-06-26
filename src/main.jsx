import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import App from './App';

const container = document.getElementById('app');

const root = createRoot(container);

let view = 'avatar'; // avatar | product
let category = 'jackets'; // hats | sneakers | jackets | womens | mens

function render() {
  root.render(<App view={view} category={category} />);
}

render();

export function toggleView() {
  view = view.includes('avatar') ? 'product' : 'avatar';
  render();
}

export function changeCategory(categoryName) {
  if (view.includes('avatar')) {
    view = 'product';
  }

  category = categoryName;
  render();
}
