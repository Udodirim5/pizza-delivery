import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CartOverview() {
  const user = useSelector((store) => store.user.username);
  const cart = useSelector((store) => store.cart.cart);

  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    if (!user) return null;
    navigate('/cart');
  };

  

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{cart.length} pizzas</span>
        <span>$23.45</span>
      </p>
      <button
        onClick={handleNavigate}
        disabled={!user}
        className="disabled:cursor-not-allowed"
      >
        Open cart &rarr;
      </button>
    </div>
  );
}

export default CartOverview;
