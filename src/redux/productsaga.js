import { takeEvery, put } from 'redux-saga/effects'
import { error_PRODUCT_LIST, PRODUCT_LIST, SEARCH_PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';

function* getProducts() {
   try {
      let data = yield fetch('https://jsonplaceholder.typicode.com/users')
      data = yield data.json();
      console.warn("action called", data)
      yield put({ type: SET_PRODUCT_LIST, data })
   } catch (error) {
      yield put({ type: error_PRODUCT_LIST, error })
   }
}
function* getProductSearch(data) {
   try {
      let result = yield fetch(`https://jsonplaceholder.typicode.com/users?username=${data.query}`)
     result= yield result.json();  
      console.warn("action called", result)
      
      yield put({ type: SET_PRODUCT_LIST, data:result })
   } catch (error) {
      yield put({ type: error_PRODUCT_LIST, error })
   }
}

function* productSaga() {
   
   yield takeEvery(PRODUCT_LIST, getProducts)
   
   yield takeEvery(SEARCH_PRODUCT_LIST, getProductSearch)
}
export default productSaga; 