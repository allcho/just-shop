import { all } from 'redux-saga/effects';
import watchCart from './watchers/cartWatcher';


function* rootSaga() {
    yield all([
        watchCart()
    ]);
}

export default rootSaga;
