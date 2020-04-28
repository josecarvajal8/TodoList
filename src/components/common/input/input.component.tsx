import React from 'react';
import { TextInput } from 'react-native';
import { style } from './input.styles';
export default function Input(props: IPropsInput) {
    const { placeHolder = '', onChange, value, style: _style = {} } = { ...props }
    return (
        <>
            <TextInput style={{ ...style.container, ..._style }}
                placeholder={placeHolder}
                onChange={(evt) => onChange(evt)}
                value={value}>
            </TextInput>
        </>
    )
}