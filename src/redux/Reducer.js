// redux/Reducer.js
import { createReducer } from '@reduxjs/toolkit';
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity,clearCart  } from './Action';

const initialState = {
  cart: [], // Make sure it is an array
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const existingProduct = state.cart.find((product) => product.id === action.payload.id);

      if (!existingProduct) {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    })
    .addCase(removeFromCart, (state, action) => {
      state.cart = state.cart.filter((product) => product.id !== action.payload.id);
    })
    .addCase(incrementQuantity, (state, action) => {
      const existingProduct = state.cart.find((product) => product.id === action.payload.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    })
    .addCase(decrementQuantity, (state, action) => {
      const existingProduct = state.cart.find((product) => product.id === action.payload.id);

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      }
    })
    
    .addCase(clearCart, (state) => {
      state.cart = [];
    });
    

    
});
