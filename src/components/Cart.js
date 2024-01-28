import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/Action';
import WithNavbar from './WithNavbar';
import Popup from './Popup';

const Cart = () => {
  const dispatch = useDispatch();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const cartObject = useSelector((state) => state.cart);
  const cart = cartObject.cart || [];

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleIncrement = (product) => {
    dispatch(incrementQuantity(product));
  };

  const handleDecrement = (product) => {
    dispatch(decrementQuantity(product));
  };

  const handleProceedToBuy = () => {
    setPopupVisible(true);
    // You can perform other actions related to the purchase here
  };

  const closePopup = () => {
    setPopupVisible(false);
    // Additional actions to perform when the popup is closed
  };
  return (
    <div className="mt-40 mb-40 ml-10 mr-10">
      
      <div>
        {cart.map((product) => (
          <div key={product.id} className="flex border-4 p-8  items-center mb-10 justify-between">
            <img src={product.thumbnail} alt={product.title} className="w-20 h-auto mr-4" />
            <div className='ml-60'>
              <p className="text-gray-500 capitalize mb-3">{product.title}</p>
              <div className="flex items-center">
                <button onClick={() => handleDecrement(product)} className="bg-blue-500 text-white p-2 rounded">
                  -
                </button>
                <span className="mx-2 text-lg">{product.quantity}</span>
                <button onClick={() => handleIncrement(product)} className="bg-blue-500 text-white p-2 rounded">
                  +
                </button>
              </div>
            </div>
            <div className="ml-auto">${(product.price * product.quantity).toFixed(2)}</div>
            <button onClick={() => handleRemove(product)} className="ml-4 text-red-500">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 text-white p-4 fixed bottom-0 left-0 w-full flex justify-between">
        <div>Total Amount: ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</div>
        <button
          disabled={cart.length === 0}
          onClick={handleProceedToBuy}
          className={`bg-green-500 text-white p-2 rounded ${cart.length === 0 && 'cursor-not-allowed bg-slate-700'}`}
        >
          Proceed to Buy
        </button>
      </div>

      {isPopupVisible && <Popup onClose={closePopup} />}
    </div>
  );
};

export default WithNavbar(Cart);
