import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BestSellers from '../screens/tabs/BestSellers';
import ShoppingList from '../screens/tabs/ShoppingList';
import Profile from '../screens/tabs/Profile';

export type HomeTabParamsList = {
	'home.bestSeller': undefined;
	'home.shoppingList': undefined;
	'home.profile': undefined;
}

const Tab = createBottomTabNavigator<HomeTabParamsList>();

const HomeTab: React.FC = () => (
	<Tab.Navigator>
		<Tab.Screen name="home.bestSeller" component={BestSellers} />
		<Tab.Screen name="home.shoppingList" component={ShoppingList} />
		<Tab.Screen name="home.profile" component={Profile} />
	</Tab.Navigator>
);

export default HomeTab;
