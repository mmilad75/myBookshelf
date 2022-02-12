import userReducer from './user/reducer';
import {combineReducers} from 'redux';
import bookReducer from './book/reducer';
import {ActionType} from './user/type';

const appReducer = combineReducers({
	user: userReducer,
	book: bookReducer,
});

const rootReducer = (state: any, action: any) => {
	if (action.type === ActionType.LOG_OUT) {
		return appReducer(undefined, action);
	}

	return appReducer(state, action);
};

export default rootReducer;
