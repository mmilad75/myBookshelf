import React, {useState} from 'react';
import {View, Text, TextInput} from '../../components/';
import {loginUser} from '../../state/user/actions';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamsList} from '../../navigators/auth';

export type signinScreenNavigationType = StackNavigationProp<AuthStackParamsList, 'auth.signin'>;

const SignIn:React.FC = () => {
	const [email, setEmail] = useState<string|undefined>(undefined);
	const [password, setPassword] = useState<string|undefined>(undefined);
	const dispatch = useDispatch();
	const navigation = useNavigation<signinScreenNavigationType>();

	const handleSignIn = () => {
		if (email && password) {
			dispatch(loginUser(email, password, navigation));
		}
	};

	return (
		<View>
			<TextInput placeholder="email" value={email} onChangeText={setEmail} />
			<TextInput placeholder="password" value={password} onChangeText={setPassword} />
			<Text onPress={handleSignIn}>Sign In</Text>
		</View>
	);
};

export default SignIn;
