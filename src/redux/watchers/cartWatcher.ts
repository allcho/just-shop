import { call, put, takeLatest } from 'redux-saga/effects';
import { setError, fetchCart, startLoading, stopLoading, setCart} from '@/redux/reducers/cartSlice';
import { CartService } from '@/services/cart.service';


function* fetchCartPayload() {
  try {
    yield put(startLoading());
    
    const data: {data?:any}  = yield call(
      CartService.getCart
    );

    if(data){
      yield put(setCart(data));
      yield put(stopLoading());
    }

    
  } catch (e) {
    yield put(setError({ message: 'Не вышло!' }));
  }
}

function* watchCart() {
  yield takeLatest(fetchCart, fetchCartPayload);
}



export default watchCart;
