import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import AuthStack from './auth';

const Index: React.FC = () => (
	<SafeAreaView>
		<NavigationContainer>
			<AuthStack />
		</NavigationContainer>
	</SafeAreaView>
);

export default Index;
