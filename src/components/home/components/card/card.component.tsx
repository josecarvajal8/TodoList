import React from 'react';
import { View, Text } from 'react-native';
import { style } from './card.styles';
export default function Card(props: ICardProps) {
    const { title } = { ...props };
    return (
        <View style={style.container}>
            <View style={style.dateContainer}>
                <Text>{'08'}</Text>
                <Text>{'OCT'}</Text>
            </View>
            <View style={style.titleContainer}>
                <Text>{title}</Text>
            </View>
        </View>
    );
};