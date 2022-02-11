import React, {useEffect} from 'react';
import {View, Text} from '../../components';
import globalStyles from '../../helpers/globalStyles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamsList} from '../../navigators/auth';
import {checkLogin, signOutUser} from '../../state/user/actions';
import {useDispatch} from 'react-redux';

export type splashScreenNavigationType = StackNavigationProp<AuthStackParamsList, 'auth.splash'>;

const Splash:React.FC = () => {
	const navigation = useNavigation<splashScreenNavigationType>();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkLogin(navigation));
	}, []);

	const handleSignOut = () => {
		dispatch(signOutUser());
	};

	return (
		<View style={globalStyles.centeredContainer}>
			<Text>Splash Screen</Text>
			<Text onPress={handleSignOut}>sign out</Text>
		</View>
	);
};

export default Splash;
