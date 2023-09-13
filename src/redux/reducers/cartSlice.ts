import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';

interface CartState {
  isInitial: boolean,
  isLoading: boolean,
  error: string | null,
  cart: any,
}

const initialState: CartState = {
  isInitial: true,
  isLoading: false,
  error: null,
  cart: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    startLoading: (draft) => {
      draft.isLoading = true;
    },
    stopLoading: (draft) => {
      draft.isLoading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    pushCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeCart: (state, action) => {
      state.cart =  state.cart.filter((v:any) => v.itemId !== action.payload);
    },
    fetchCart: ()=> {}
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  startLoading,
  stopLoading,
  setError,
  setCart,
  fetchCart,
  pushCart,
  removeCart
} = cartSlice.actions;
export const selectCartState = (state: RootState) => state.cart;