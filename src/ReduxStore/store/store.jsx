import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import deleteDataReducer from '../reducer/deleteDataReducer';
import getDataReducer from '../reducer/getDataReducer'
import updateNewsReducer from '../reducer/updateNewsReducer';
import viewDataReducer from '../reducer/viewDataReducer';
const rootReducer = combineReducers({
    news: getDataReducer,
    dltNews: deleteDataReducer,
    viewNews: viewDataReducer,
    updateNews: updateNewsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;