import React from 'react';
import {BottomTabNavigationProp, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BestSellers from '../screens/tabs/BestSellers';
import ShoppingList from '../screens/tabs/ShoppingList';
import Profile from '../screens/tabs/Profile';
import {MainStackParamsList} from '.';

export type HomeTabParamsList = {
	'home.bestSeller': undefined;
	'home.shoppingList': undefined;
	'home.profile': undefined;
}

export type homeTabNavigationType = BottomTabNavigationProp<MainStackParamsList, 'home'>;

const Tab = createBottomTabNavigator<HomeTabParamsList>();

const HomeTab: React.FC = () => (
	<Tab.Navigator>
		<Tab.Screen name="home.bestSeller" component={BestSellers} />
		<Tab.Screen name="home.shoppingList" component={ShoppingList} />
		<Tab.Screen name="home.profile" component={Profile} />
	</Tab.Navigator>
);

export default HomeTab;
