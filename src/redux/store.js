import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: 'Bengaluru 562114',
  cartCount: 0
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setLocation: (state, action) => { state.location = action.payload; },
    setCartCount: (state, action) => { state.cartCount = action.payload; }
  }
});

export const { setLocation, setCartCount } = headerSlice.actions;

const store = configureStore({
  reducer: {
    header: headerSlice.reducer
  }
});

export default store;
