import {Dispatch} from 'react';
import {getBestSellerBooksApi} from '../../apis/books';
import {Action, Book, Error} from './interface';
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
