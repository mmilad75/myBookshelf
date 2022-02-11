import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
	container: ViewStyle,
	centeredContainer: ViewStyle
}

const globalStyles = StyleSheet.create<Styles>({
	container: {
		flex: 1,
	},
	centeredContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default globalStyles;
