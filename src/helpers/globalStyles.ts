import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
	container: ViewStyle,
}

const globalStyles = StyleSheet.create<Styles>({
	container: {
		flex: 1,
	},
});

export default globalStyles;
