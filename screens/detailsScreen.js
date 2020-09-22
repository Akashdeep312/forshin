import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyle';

export default function DetailsScreen({ navigation }) {
    return (

        <View style={globalStyles.container}>
            <Text>This is Details Screen</Text>
            <View style={{ margin: 5 }}>
                <Button title="Go To Details Screen " onPress={() => navigation.push('Details')} />
            </View>
            <View style={{ margin: 5 }}>
                <Button title="Go To Home Screen " onPress={() => navigation.navigate('Home')} />
            </View>
            <View style={{ margin: 5 }}>
                <Button title="Go Back " onPress={() => navigation.goBack()} />
            </View>
            <View style={{ margin: 5 }}>
                <Button title="Pop Once " onPress={() => navigation.pop()} />
            </View>
            <View style={{ margin: 5 }}>
                <Button title="Go To Top " onPress={() => navigation.popToTop()} />
            </View>


        </View >

    );
}