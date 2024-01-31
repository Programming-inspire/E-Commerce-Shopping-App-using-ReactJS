// Action.js
import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('cart/addToCart');
export const removeFromCart = createAction('cart/removeFromCart');
export const incrementQuantity = createAction('cart/incrementQuantity');
export const decrementQuantity = createAction('cart/decrementQuantity');
export const clearCart = createAction('CLEAR_CART');
export const setSearchTerm = createAction('SET_SEARCH_TERM');

export const setGlobalSearchTerm = createAction('SET_GLOBAL_SEARCH_TERM'); // Make sure this line is correct

export const updateGlobalSearchTerm = (searchTerm) => {
  return (dispatch) => {
    dispatch(setSearchTerm(searchTerm));
  };
};
