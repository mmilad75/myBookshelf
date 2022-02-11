import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import AuthStack from './auth';
import globalStyles from '../helpers/globalStyles';

const Index: React.FC = () => (
	<SafeAreaView style={globalStyles.container}>
		<NavigationContainer>
			<AuthStack />
		</NavigationContainer>
	</SafeAreaView>
);

export default Index;
