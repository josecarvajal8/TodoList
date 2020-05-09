import { StyleSheet } from 'react-native';
import { THEMES, COLORS } from '../../../../helpers/constants';
// const { default: _default } = THEMES['DEFAULT'];
export const style = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white_soft,
        width: 370,
        height: 100,
        marginTop: 20,
        shadowColor: COLORS.black_shadow,
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 4,
        flexDirection: 'row'
    },
    dateContainer: {
        padding: 20,
        height: 100,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleContainer: {
        padding: 20,
        height: 100,
        width: 290,
        alignItems: 'center',
        justifyContent: 'center'
    }
});