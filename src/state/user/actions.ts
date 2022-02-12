import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {splashScreenNavigationType} from '../../screens/auth/Splash';
import {Dispatch} from 'redux';
import {Action} from './interface';
import {ActionType} from './type';
import {signinScreenNavigationType} from '../../screens/auth/SignIn';
import {bestSellerScreenNavigationType} from '../../screens/tabs/BestSellers';

export const setUser = (payload: FirebaseAuthTypes.User | null): Action => ({
	type: ActionType.SET_USER,
	payload,
});

export const setError = (payload: any) => ({
	type: ActionType.ERROR,
	payload,
});

export const checkLogin = (navigation: splashScreenNavigationType & bestSellerScreenNavigationType) => (dispatch: Dispatch<Action>) => {
	try {
		auth().onAuthStateChanged(user => {
			dispatch(setUser(user));

			if (user) {
				navigation.reset({
					index: 0,
					routes: [
						{name: 'home.bestSeller'},
					],
				});
			} else {
				navigation.reset({
					index: 0,
					routes: [
						{name: 'auth.signin'},
					],
				});
			}
		});
	} catch (e: any) {
		dispatch(setError(e?.code));
	}
};

export const loginUser = (email: string, password: string, navigation: signinScreenNavigationType) => async (dispatch: Dispatch<Action>) => {
	try {
		const res = await auth().signInWithEmailAndPassword(email, password);
		dispatch(setUser(res.user));
		navigation.reset({
			index: 0,
			routes: [
				{name: 'auth.signup'},
			],
		});
	} catch (e: any) {
		dispatch(setError(e?.code));
	}
};

export const registerUser = (email: string, password: string, navigation: bestSellerScreenNavigationType) => async (dispatch: Dispatch<Action>) => {
	try {
		const res = await auth().createUserWithEmailAndPassword(email, password);
		dispatch(setUser(res.user));
		if (res.user) {
			navigation.reset({
				index: 0,
				routes: [
					{name: 'home.bestSeller'},
				],
			});
		}
	} catch (e: any) {
		dispatch(setError(e?.code));
	}
};

export const signOutUser = () => async (dispatch: Dispatch<Action>) => {
	try {
		await auth().signOut();
		dispatch(setUser(null));
	} catch (e: any) {
		dispatch(setError(e?.code));
	}
};
