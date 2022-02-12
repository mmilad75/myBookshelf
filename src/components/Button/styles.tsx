import {StyleSheet} from 'react-native';
import colors from '../../helpers/colors';
import {scaleW} from '../../helpers/device';

export default StyleSheet.create({
	container: {
		paddingHorizontal: scaleW(16),
		paddingVertical: scaleW(8),
		backgroundColor: colors.green,
		alignSelf: 'baseline',
	},
	text: {
		color: colors.white,
	},
});
