import React, { ReactNode } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

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
