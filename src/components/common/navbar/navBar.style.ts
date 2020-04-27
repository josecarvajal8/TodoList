import { StyleSheet } from 'react-native';
import { THEMES } from '../../../helpers/constants';
const { primary, default: _default } = THEMES['DEFAULT'];
export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: _default,
        marginTop: 20,
        fontSize: 20
    }
});