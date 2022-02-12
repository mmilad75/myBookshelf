import {StyleSheet} from 'react-native';
import colors from '../../helpers/colors';
import {scaleW} from '../../helpers/device';

export default StyleSheet.create({
	container: {
		marginBottom: scaleW(20),
		padding: scaleW(10),
		backgroundColor: colors.white,
	},
	title: {
		fontSize: scaleW(16),
		fontWeight: 'bold',
		marginBottom: scaleW(4),
	},
	author: {
		marginBottom: scaleW(2),
	},
	description: {
		marginBottom: scaleW(10),
	},
});
