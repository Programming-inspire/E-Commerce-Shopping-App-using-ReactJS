// Popup.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/Action';

const Popup = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleContinueShopping = () => {
    dispatch(clearCart());
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-10 rounded">
        <p className="mb-5">Thank you for shopping at BestBuy!</p>
        <Link to="/">
          <button
            onClick={handleContinueShopping}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Continue to Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Popup;
