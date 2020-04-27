import React from 'react'
import { View, StatusBar, Text } from 'react-native'
import { style } from './navBar.style'
export default function NavBar(props: IPropsNavbar) {
    const { title = '' } = { ...props }
    return (
        <View style={style.container}>
            <StatusBar translucent />
            <Text style={style.title}>{title}</Text>
        </View>
    )
}