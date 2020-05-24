import React, { useMemo } from 'react'
import { NavBar, Input, Draggable } from '../common'
import { style } from './home.styles';
import { View, ScrollView, Text } from 'react-native';
import { Card } from './components';
import { tempData } from '../../helpers/constants';
export default function Home() {
    const [searchValue, setSearchValue] = React.useState('');
    const [eventsData, setEventsData] = React.useState(tempData);
    const renderListEvents = (data: any) =>
        data.map((el: any, index: any) => {
            const { date = '', description = '', title = '', type = '' } = { ...el };
            return (
                <Draggable>
                    <Card date={date} description={description} title={title} type={type} key={index} />
                </Draggable>
            );
        });
    const onChangeSearchValue = (data: any) => {
        setSearchValue(data);
    }
    const searchEvent = (data: any, filter: string) => {
        return data.filter((el: any) => {
            const { title = '' } = { ...el };
            return title.includes(filter);
        });
    }
    const filterData = useMemo(() => searchEvent(eventsData, searchValue), [eventsData, searchValue]);
    return (
        <>
            <NavBar title={'My List'} />
            <View style={style.container}>
                <Input value={searchValue} onChange={onChangeSearchValue} placeHolder={'Search'} style={style.input} />
                <ScrollView>
                    {renderListEvents(filterData)}
                </ScrollView>
            </View>
        </>
    );
};