import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import screens from '../screens';
import SignIn from '../../screens/auth/SignIn';
import Splash from '../../screens/auth/Splash';

const Stack = createStackNavigator();

const AuthStack: React.FC = () => (
	<Stack.Navigator>
		<Stack.Screen name={screens.auth.splash} component={Splash} />
		<Stack.Screen name={screens.auth.signin} component={SignIn} />
	</Stack.Navigator>
);

export default AuthStack;
