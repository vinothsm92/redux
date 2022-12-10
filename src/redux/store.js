import rootReducer from './rootReducer';
import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware
from '@redux-saga/core';
import productSaga from './productsaga';

const sagaMiddleware=createSagaMiddleware();
const store=configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
})

sagaMiddleware.run(productSaga);
export default store;