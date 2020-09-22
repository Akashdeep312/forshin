import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyle';


export default function SplashScreen() {
    return (
        <View style={globalStyles.container}>
            <Text>This is Splash Screen</Text>
        </View>
    );
}