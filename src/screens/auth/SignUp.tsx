import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, TextInput} from '../../components';
import {AuthStackParamsList} from '../../navigators/Auth';
import {registerUser} from '../../state/user/actions';

export type signupScreenNavigationType = StackNavigationProp<AuthStackParamsList, 'auth.signup'>;

const SignUp: React.FC = () => {
	const [email, setEmail] = useState<string|undefined>(undefined);
	const [password, setPassword] = useState<string|undefined>(undefined);
	const navigation = useNavigation<signupScreenNavigationType>();
	const dispatch = useDispatch();

	const handleSignUp = () => {
		if (email && password) {
			dispatch(registerUser(email, password, navigation));
		}
	};

	return (
		<View>
			<TextInput value={email} placeholder="email" onChangeText={setEmail} />
			<TextInput value={password} placeholder="password" onChangeText={setPassword} />
			<Text onPress={handleSignUp}>sign up</Text>
		</View>
	);
};

export default SignUp;
