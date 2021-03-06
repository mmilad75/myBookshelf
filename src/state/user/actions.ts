import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {splashScreenNavigationType} from '../../screens/auth/Splash';
import {Dispatch} from 'redux';
import {Action, ActionLogOut} from './interface';
import {ActionType} from './type';
import {signinScreenNavigationType} from '../../screens/auth/SignIn';
import {homeTabNavigationType} from '../../navigators/Home';
import {profileScreenNavigationType} from '../../screens/tabs/Profile';

export const setUser = (payload: FirebaseAuthTypes.User | null): Action => ({
	type: ActionType.SET_USER,
	payload,
});

export const setError = (payload: any) => ({
	type: ActionType.SET_ERROR,
	payload,
});

export const checkLogin = (navigation: splashScreenNavigationType & homeTabNavigationType) => (dispatch: Dispatch<Action>) => {
	try {
		auth().onAuthStateChanged(user => {
			dispatch(setUser(user));
			if (user) {
				navigation.reset({
					index: 0,
					routes: [
						{name: 'home'},
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
		dispatch(setError(e?.message));
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
		dispatch(setError(e?.message));
	}
};

export const registerUser = (email: string, password: string, navigation: homeTabNavigationType) => async (dispatch: Dispatch<Action>) => {
	try {
		const res = await auth().createUserWithEmailAndPassword(email, password);
		dispatch(setUser(res.user));
		if (res.user) {
			navigation.reset({
				index: 0,
				routes: [
					{name: 'home'},
				],
			});
		}
	} catch (e: any) {
		dispatch(setError(e?.message));
	}
};

export const logOut = (): ActionLogOut => ({
	type: ActionType.LOG_OUT,
});

export const signOutUser = (navigation: profileScreenNavigationType) => async (dispatch: Dispatch<ActionLogOut>) => {
	try {
		await auth().signOut();
		dispatch(logOut());
		navigation.reset({
			index: 0,
			routes: [
				{name: 'auth'},
			],
		});
	} catch (e: any) {
		dispatch(setError(e?.message));
	}
};
