import { combineReducers } from 'redux'
import authorsReducer from './authorsReducer'
import newsReducer from './newsReducer'

export default combineReducers({
    authors: authorsReducer,
    news: newsReducer
})