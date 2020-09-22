import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyle';


export default function ProfileScreen() {
    return (
        <View style={globalStyles.container}>
            <Text>This is Profile Screen</Text>
        </View>
    );
}