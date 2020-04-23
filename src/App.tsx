import React, { ReactNode } from 'react';
import Reactotron from 'reactotron-react-native'
import {
    SafeAreaView,
    Text,
    StatusBar,
} from 'react-native';
const App: () => ReactNode = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Text>{'Hello world'}</Text>
            </SafeAreaView>
        </>
    );
};
export default App;
