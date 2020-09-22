import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../screens/detailsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const DetailsStack = createStackNavigator();

export default function HomeScreenStack({ navigation }) {
    return (
        <DetailsStack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                backgroundColor: '#1f65ff',

            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
                backgroundColor: '#1f65ff',
                headerLeft: () => <MaterialIcons onPress={() => navigation.openDrawer()} name="menu" size={24} color='#fff' />
            }} />

        </DetailsStack.Navigator>
    );
}
