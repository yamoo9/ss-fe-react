import './App.css';
import AvatarList from './components/Avatar/AvatarList';
import ProductList from './components/Product/ProductList';
import avatarsData from './data/avatars.json';
import productsData from './data/products.json';
import { changeCategory, toggleView } from './main';

export default function App({ view, category }) {
  const products = findProductList(category);
  const viewMode = view.includes('avatar') ? 'Product' : 'Avatar';
  const buttonLabel = `Change ${viewMode} List`;

  return (
    <div className="App">
      <nav className="AppNavigation">
        <select
          id="category"
          onChange={(e) => {
            const value = e.target.value;

            if (value) {
              changeCategory(e.target.value);
            }
          }}
        >
          <option value="">Category</option>
          <option value="hats">hats</option>
          <option value="sneakers">sneakers</option>
          <option value="jackets">jackets</option>
          <option value="womens">womens</option>
          <option value="mens">mens</option>
        </select>
        <button
          type="button"
          onClick={toggleView}
          title={buttonLabel}
          aria-label={buttonLabel}
        >
          {viewMode} List
        </button>
      </nav>
      {view.includes('avatar') ? (
        <AvatarList list={avatarsData} />
      ) : (
        <>
          <ProductList list={products} />
        </>
      )}
    </div>
  );
}

function findProductList(categoryName) {
  return productsData.find(
    (category) => category.key.toLowerCase() === categoryName
  ).items;
}
