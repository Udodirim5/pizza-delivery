/* eslint-disable react/prop-types */
import generatePropTypes from '../../utils/generatePropTypes';
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { removeFromCart } from './cartSlice';

const DeleteItem = ({ pizzaId, children }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {

    dispatch(removeFromCart(pizzaId));
  };

  return (
    <Button onClick={handleRemoveFromCart} btnStyle="small">
      {children}
    </Button>
  );
};


// Define sample data to infer PropTypes
const sampleData = {
  pizzaId: 1, // Assuming it's a number
};

// Apply generated PropTypes
DeleteItem.propTypes = generatePropTypes(sampleData);

export default DeleteItem;
