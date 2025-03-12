import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';

function Cart() {
  const user = useSelector((store) => store.user.username);
  const cart = useSelector((store) => store.cart.cart);

  const dispatch = useDispatch();

  const name = user ? user : 'Guest';

  const handleClearCart = (e) => {
    e.preventDefault();
    dispatch(clearCart());
  };

  return (
    <div className="px-3 py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        Your cart,<span className="capitalize"> {name}</span>
      </h2>

      {cart.length > 0 ? (
        <ul className="mt-3 divide-y divide-stone-200 border-b">
          {cart.map((item) => (
            <CartItem key={item.key} item={item} />
          ))}
        </ul>
      ) : (
        <p className="text-'lg' font-bold">Your cart is empty.</p>
      )}

      {cart.length > 0 && (
        <div className="mt-6 space-x-2">
          <Button btnStyle="primary" to="/order/new">
            Order pizzas
          </Button>
          <Button onClick={handleClearCart} btnStyle="secondary">
            Clear cart
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cart;
