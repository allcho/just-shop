import { useEffect } from 'react';
import { fetchCart, selectCartState } from '@/redux/reducers/cartSlice';
import { useAppDispatch, useAppSelector } from './redux';

export const useCart = () => {
  const cartState = useAppSelector(selectCartState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return cartState.cart;
};


