import { StyleSheet } from 'react-native';
import { THEMES } from '../../../helpers/constants';
const { primary, default: _default } = THEMES['DEFAULT'];
export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: primary,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        color: _default,
        marginTop: 10,
        fontSize: 20
    }
});