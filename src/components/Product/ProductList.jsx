import './ProductList.css';
import Product from './Product';

export default function ProductList({ list = [] }) {
  return (
    <ul className="ProductList">
      {list.map((item) => (
        <li key={item.id}>
          <Product item={item} />
        </li>
      ))}
    </ul>
  );
}
