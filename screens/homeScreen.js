import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyle';

export default function HomeScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>Home Screen</Text>
            <Button title="Go To Details Screen " onPress={() => navigation.navigate('Details')} />
        </View>
    );
}