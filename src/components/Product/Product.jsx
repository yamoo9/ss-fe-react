import './Product.css';
import { currency } from '../../utils';

export default function Product({ item }) {
  return (
    <figure className="Product">
      <div data-mark="mask">
        <img data-mark="image" src={item.imageUrl} alt="" />
      </div>
      <figcaption>
        <strong data-mark="name">{item.name}</strong>
        <span data-mark="price">{currency(item.price)}</span>
      </figcaption>
    </figure>
  );
}
