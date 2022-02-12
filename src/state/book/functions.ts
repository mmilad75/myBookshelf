import {Book} from './interface';

export const isBookInShoplist = (book: Book, shoplist: Book[]): boolean => {
	const index = shoplist.findIndex(item => item.title === book.title);
	return index !== -1;
};
