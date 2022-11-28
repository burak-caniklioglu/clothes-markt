import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import favoriteReducer from '../features/favoriteSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
  },
});
