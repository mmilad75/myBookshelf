import React, {useEffect, useState} from 'react';
import {Book} from '../../state/book/interface';
import {View, Text, Button} from '../';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {setAddToShoplist} from '../../state/book/actions';
import {isBookInShoplist as isBookInShoplistFN} from '../../state/book/functions';
import {useAppSelector} from '../../helpers/hooks';

interface Props {
  item: Book
}

const BookItem:React.FC<Props> = ({item}) => {
	const dispatch = useDispatch();
	const shoplist = useAppSelector(state => state.book.shopList);
	const [isBookInShoplist, setIsBookInShoplist] = useState<boolean>(false);

	useEffect(() => {
		const isBookInShoplist = isBookInShoplistFN(item, shoplist);
		setIsBookInShoplist(isBookInShoplist);
	}, [shoplist]);

	const handleAddToShoplist = () => {
		if (!isBookInShoplist) {
			dispatch(setAddToShoplist(item));
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{item.title}</Text>
			<Text style={styles.author}>{`Author: ${item.author}`}</Text>
			{item.description !== '' && (
				<Text style={styles.description}>{`Description: ${item.description}`}</Text>
			)}
			<Button onPress={() => handleAddToShoplist()} text={isBookInShoplist ? 'already added' : 'add to shoplist'} />
		</View>
	);
};

export default BookItem;
