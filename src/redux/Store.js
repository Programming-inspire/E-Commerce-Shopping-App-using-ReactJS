import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './Reducer';
import { searchReducer } from './Reducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});

export default store;
