import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  favoriteItems: Cookies.get('favoriteItems')
    ? JSON.parse(Cookies.get('favoriteItems'))
    : [],
  isFavorite: false,
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const existingIndex = state.favoriteItems.find(
        (item) => item.slug === action.payload.slug,
      );

      if (!existingIndex) {
        let tempProductItem = { ...action.payload };
        state.favoriteItems.push(tempProductItem);
        Cookies.set('favoriteItems', JSON.stringify(state.favoriteItems));
      }
    },

    removeFromFavorites(state, action) {
      state.favoriteItems.map((item) => {
        if (item.slug === action.payload.slug) {
          const nextFavoriteItems = state.favoriteItems.filter(
            (favoriteItem) => favoriteItem.slug !== item.slug,
          );

          state.favoriteItems = nextFavoriteItems;
        }

        Cookies.set('favoriteItems', JSON.stringify(state.favoriteItems));
        return state;
      });
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
