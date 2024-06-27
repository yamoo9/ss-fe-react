import './App.css';
import { useState } from 'react';
import avatarsData from '@/data/avatars.json';
import productsData from '@/data/products.json';
import AvatarList from '@/components/Avatar/AvatarList';
import ProductList from '@/components/Product/ProductList';
import AppNavigation from '@/components/AppNavigation/AppNavigation';
import TicTacToe from '@/game/TicTacToe';

export default function App() {
  let [view, setView] = useState('tic-tac-toe');
  let [category, setCategory] = useState('jackets');

  const handleToggleView = (nextView) => {
    setView(nextView);
  };

  const changeCategory = (categoryName) => {
    setCategory(categoryName);
    setView('product');
  };

  const handleChangeCategory = (e) => {
    const value = e.target.value;
    if (value) changeCategory(value);
  };

  const products = findProductList(category);

  let renderViewComponent = null;

  switch (view) {
    default:
    case 'avatar':
      renderViewComponent = <AvatarList list={avatarsData} />;
      break;
    case 'product':
      renderViewComponent = <ProductList list={products} />;
      break;
    case 'tic-tac-toe':
      renderViewComponent = <TicTacToe />;
  }

  return (
    <div className="App">
      <AppNavigation
        view={view}
        category={category}
        onToggle={handleToggleView}
        onChange={handleChangeCategory}
      />
      {renderViewComponent}
    </div>
  );
}

function findProductList(categoryName) {
  return productsData.find(
    (category) => category.key.toLowerCase() === categoryName
  ).items;
}
