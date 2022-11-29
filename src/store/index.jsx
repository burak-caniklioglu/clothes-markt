import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import favoriteReducer from '../features/favoriteSlice';
import themeReducer from '../features/themeSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
    darkMode:themeReducer,
  },
});
