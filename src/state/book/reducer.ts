import {Action, ActionAddToShoplist, ActionRemoveFromShoplist, Reducer} from './interface';
import {ActionType} from './type';

const initState: Reducer = {
	bestSeller: [],
	shopList: [],
	error: null,
};

export const bookReducer = (state = initState, action: Action & ActionAddToShoplist & ActionRemoveFromShoplist): Reducer => {
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
				bestSeller: [],
				error: action.payload,
			};
		case ActionType.ADD_TO_SHOPLIST: {
			const {shopList} = state;
			const index = shopList.findIndex(item => item.title === action.payload.title);
			if (index === -1) {
				return {
					...state,
					error: null,
					shopList: [...state.shopList, action.payload],
				};
			}

			return {
				...state,
				error: null,
			};
		}

		case ActionType.REMOVE_FROM_SHOPLIST: {
			const {shopList} = state;
			const index = shopList.findIndex(item => item.title === action.payload.title);
			if (index > -1) {
				shopList.splice(index, 1);
			}

			return {
				...state,
				error: null,
				shopList,
			};
		}

		default:
			return state;
	}
};

export default bookReducer;
