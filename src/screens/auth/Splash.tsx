import React, {useEffect} from 'react';
import {View, Text} from '../../components';
import globalStyles from '../../helpers/globalStyles';
import auth from '@react-native-firebase/auth';
import {CommonActions, useNavigation} from '@react-navigation/native';
import screens from '../../navigators/screens';

const Splash:React.FC = () => {
	const navigation = useNavigation();

	useEffect(() => {
		auth().onAuthStateChanged(userState => {
			if (userState) {
				console.log('userState', userState);
			} else {
				navigation.dispatch(
					CommonActions.reset({
						index: 0,
						routes: [
							{name: screens.auth.signin},
						],
					}),
				);
			}
		});
	}, []);

	return (
		<View style={globalStyles.centeredContainer}>
			<Text>Splash Screen</Text>
		</View>
	);
};

export default Splash;
