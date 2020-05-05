import React from 'react'
import { View, StatusBar, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { style } from './navBar.style'
export default function NavBar(props: IPropsNavbar) {
    const { title = '',
        textLeftBtn = '',
        leftButton = false,
        rightButton = false,
        textRightBtn = '',
        actionLeft = () => null, actionRight = () => null } = { ...props }
    return (
        <View style={style.container}>
            <SafeAreaView>
                {leftButton && <TouchableOpacity onPress={() => actionLeft()}>{textLeftBtn}</TouchableOpacity>}
                <Text style={style.title}>{title}</Text>
                {rightButton && <TouchableOpacity onPress={() => actionRight()}>{textRightBtn}</TouchableOpacity>}
            </SafeAreaView>
        </View>
    )
}