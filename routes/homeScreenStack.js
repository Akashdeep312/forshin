import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const HomeStack = createStackNavigator();

export default function HomeScreenStack({ navigation }) {
    return (
        <HomeStack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',

            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
                backgroundColor: '#009387',
                headerLeft: () => <MaterialIcons onPress={() => navigation.openDrawer()} name="menu" size={24} color='#fff' />
            }} />

        </HomeStack.Navigator>
    );
}
