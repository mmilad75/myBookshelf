import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from '../../components';
import {HomeTabParamsList} from '../../navigators/Home';

export type bestSellerScreenNavigationType = BottomTabNavigationProp<HomeTabParamsList, 'home.bestSeller'>;

const BestSellers: React.FC = () => (
	<View>
		<Text>BestSellers</Text>
	</View>
);

export default BestSellers;
