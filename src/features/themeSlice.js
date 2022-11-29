import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeMode: (state) => {
      return (state = !state);
    },
  },
});

export const { changeMode } = themeSlice.actions;

export default themeSlice.reducer;
