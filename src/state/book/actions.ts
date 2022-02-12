import {Dispatch} from 'react';
import {getBestSellerBooksApi} from '../../apis/books';
import {Action, ActionAddToShoplist, ActionRemoveFromShoplist, Book, Error} from './interface';
import {ActionType} from './type';

export const setBestSeller = (payload: Book[]): Action => ({
	type: ActionType.SET_BEST_SELLER,
	payload,
});

export const setError = (payload: any): Error => ({
	type: ActionType.SET_ERROR,
	payload,
});

export const getBestSeller = () => async (dispatch: Dispatch<Book[]|Error>) => {
	try {
		const res = await getBestSellerBooksApi();
		dispatch(setBestSeller(res));
	} catch (e: any) {
		dispatch(setError(e));
	}
};

export const addToShoplist = (payload: Book): ActionAddToShoplist => ({
	type: ActionType.ADD_TO_SHOPLIST,
	payload,
});

export const removeFromShoplist = (payload: Book): ActionRemoveFromShoplist => ({
	type: ActionType.REMOVE_FROM_SHOPLIST,
	payload,
});

export const setAddToShoplist = (payload: Book) => (dispatch: Dispatch<ActionAddToShoplist>) => {
	try {
		dispatch(addToShoplist(payload));
	} catch (e: any) {
		dispatch(setError(e));
	}
};

export const setRemoveFromShoplist = (payload: Book) => (dispatch: Dispatch<ActionRemoveFromShoplist>) => {
	try {
		dispatch(removeFromShoplist(payload));
	} catch (e: any) {
		dispatch(setError(e));
	}
};
