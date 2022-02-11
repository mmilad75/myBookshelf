import {Action, Reducer} from './interface';
import {ActionType} from './type';

const initState: Reducer = {
	user: null,
	error: null,
};

export const userReducer = (state = initState, action: Action) => {
	switch (action.type) {
		case ActionType.SET_USER:
			return {
				...state,
				error: null,
				user: action.payload,
			};
		case ActionType.ERROR:
			return {
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
