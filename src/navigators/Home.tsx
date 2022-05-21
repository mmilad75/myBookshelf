import React from 'react';
import {BottomTabNavigationProp, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BestSellers from '../screens/tabs/BestSellers';
import ShoppingList from '../screens/tabs/ShoppingList';
import Profile from '../screens/tabs/Profile';
import {MainStackParamsList} from '.';
import {tabsTestID} from '../../e2e/testIds';

export type HomeTabParamsList = {
	'home.bestSeller': undefined;
	'home.shoppingList': undefined;
	'home.profile': undefined;
}

export type homeTabNavigationType = BottomTabNavigationProp<MainStackParamsList, 'home'>;

const Tab = createBottomTabNavigator<HomeTabParamsList>();

const HomeTab: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen options={{tabBarTestID: tabsTestID.items.bestSellers, headerTitle: 'Best Seller', tabBarIcon: () => null, tabBarLabel: 'Best Seller'}} name="home.bestSeller" component={BestSellers} />
    <Tab.Screen options={{tabBarTestID: tabsTestID.items.shoppingList, headerTitle: 'Shopping List', tabBarIcon: () => null, tabBarAccessibilityLabel: 'mmilad', tabBarLabel: 'Shopping List'}} name="home.shoppingList" component={ShoppingList} />
    <Tab.Screen options={{tabBarTestID: tabsTestID.items.profile, headerTitle: 'Profile', tabBarIcon: () => null, tabBarLabel: 'Profile'}} name="home.profile" component={Profile} />
  </Tab.Navigator>
);

export default HomeTab;
