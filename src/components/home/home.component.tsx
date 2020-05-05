import React from 'react'
import { NavBar, Input } from '../common'
import { style } from './home.styles';
import { View, ScrollView } from 'react-native';
import { Card } from './components';
import { tempData } from '../../helpers/constants';
export default function Home() {
    const [searchValue, onChangeSearchValue] = React.useState('')
    const renderListEvents = () =>
        tempData.map((el: any) => {
            const { date = '', description = '', title = '', type = '' } = { ...el };
            return (<Card date={date} description={description} title={title} type={type} />);
        });

    return (
        <>
            <NavBar title={'My List'} />
            <View style={style.container}>
                <Input value={searchValue} onChange={onChangeSearchValue} placeHolder={'Search'} style={style.input} />
                <ScrollView>
                    {renderListEvents()}
                </ScrollView>
            </View>
        </>
    );
};