import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BookItem, FlatList, View} from '../../components';
import globalStyles from '../../helpers/globalStyles';
import {useAppSelector} from '../../helpers/hooks';
import {HomeTabParamsList} from '../../navigators/Home';
import {getBestSeller} from '../../state/book/actions';
import {Book} from '../../state/book/interface';

export type bestSellerScreenNavigationType = BottomTabNavigationProp<HomeTabParamsList, 'home.bestSeller'>;

const BestSellers: React.FC = () => {
	const dispatch = useDispatch();
	const books = useAppSelector(state => state.book.bestSeller);

	useEffect(() => {
		dispatch(getBestSeller());
	}, []);

	return (
		<View style={globalStyles.screenContainer}>
			<FlatList
				data={books}
				renderItem={({item, index}: {item: Book, index: number}) => <BookItem key={index} item={item} />}
			/>
		</View>
	);
};

export default BestSellers;
