import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateGlobalSearchTerm } from '../redux/Action';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  
  const cart = useSelector((state) => state.cart.cart);

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    dispatch(updateGlobalSearchTerm(newSearchTerm));
  };
  
  return (
    <div className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-10">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/">
        <span className="text-xl font-bold text-white">Best Buy</span>
      </Link>

      <div className="mx-2 md:mx-4 lg:flex-grow">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="px-2 py-1 rounded bg-gray-700 text-white w-full md:w-64 lg:w-full"
        />
      </div>

        <div className="flex items-center">
          <div className="border border-white rounded px-1 md:px-4 hover:bg-sky-700 transition-colors duration-300">
            <Link to="/login" className="flex items-center p-2">
              <i className="fa fa-user-plus mr-1"></i>Login
            </Link>
          </div>

          <div className="border border-white rounded ml-5 px-1 md:px-4 hover:bg-sky-700 transition-colors duration-300">
            <Link to="/cart" className="flex items-center p-2">
              <i className="fa fa-shopping-cart mr-1"></i>Cart
              {cart.length > 0 && <span className="badge bg-orange-700 rounded ml-2 p-1">{cart.length}</span>}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;