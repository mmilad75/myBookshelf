import {Action, Reducer} from './interface';
import {ActionType} from './type';

const initState: Reducer = {
	bestSeller: null,
	error: null,
};

export const bookReducer = (state = initState, action: Action): Reducer => {
	switch (action.type) {
		case ActionType.SET_BEST_SELLER:
			return {
				...state,
				error: null,
				bestSeller: action.payload,
			};
		case ActionType.SET_ERROR:
			return {
				...state,
				bestSeller: null,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default bookReducer;
