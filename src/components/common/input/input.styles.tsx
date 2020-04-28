import { StyleSheet } from 'react-native';
import { THEMES } from '../../../helpers/constants';
const { secondary } = THEMES['DEFAULT'];
export const style = StyleSheet.create({
    container: {
        height: 30,
        borderColor: secondary,
        borderWidth: 2,
        borderRadius: 40
    }
});