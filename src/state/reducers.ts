import userReducer from './user/reducer';
import {combineReducers} from 'redux';
import bookReducer from './book/reducer';

const reducer = combineReducers({
	user: userReducer,
	book: bookReducer,
});

export default reducer;
