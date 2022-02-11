import userReducer from './user/reducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
	user: userReducer,
});

export default reducer;
