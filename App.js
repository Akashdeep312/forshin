import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MyTabs from './screens/myTab';
import MyDrawerContent from './screens/myDrawerContents'
import SupportScreen from './screens/supportScreen';
import SettingScreen from './screens/settingScreen';
import BookMarkScreen from './screens/bookmarkScreen';
import RootStackScreen from './screens/rootStackScreen';



const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props=><MyDrawerContent {...props} />}>
  <Drawer.Screen name="HomeDrawer" component={MyTabs} />
        <Drawer.Screen name="BookMarksScreen" component={BookMarkScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
      </Drawer.Navigator>
      {/* <RootStackScreen /> */}
    </NavigationContainer>
  );
}



{/*  <Drawer.Navigator drawerContent={props=><MyDrawerContent {...props} />}>
  <Drawer.Screen name="HomeDrawer" component={MyTabs} />
        <Drawer.Screen name="BookMarksScreen" component={BookMarkScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
      </Drawer.Navigator>
      */}