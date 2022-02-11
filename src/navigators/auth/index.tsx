import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import screens from '../screens';
import SignIn from '../../screens/auth/SignIn';

const Stack = createStackNavigator();

const AuthStack: React.FC = () => (
	<Stack.Navigator>
		<Stack.Screen name={screens.auth.signin} component={SignIn} />
	</Stack.Navigator>
);

export default AuthStack;
