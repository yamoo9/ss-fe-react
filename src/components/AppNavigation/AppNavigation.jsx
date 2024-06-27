import { useState } from 'react';
import './AppNavigation.css';

function AppNavigation({ view, category, onToggle, onChange }) {
  const [buttons] = useState([
    { id: 'avatar', label: 'Avatar List' },
    { id: 'product', label: 'Product List' },
    { id: 'tic-tac-toe', label: 'Tic Tac Toe' },
  ]);

  const handleView = (viewName) => () => onToggle(viewName);

  return (
    <nav className="AppNavigation" lang="en">
      <select id="category" value={category} onChange={onChange}>
        <option value="hats">hats</option>
        <option value="sneakers">sneakers</option>
        <option value="jackets">jackets</option>
        <option value="womens">womens</option>
        <option value="mens">mens</option>
      </select>

      {buttons.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={id.includes(view) ? 'active' : ''}
          onClick={handleView(id)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}

export default AppNavigation;
