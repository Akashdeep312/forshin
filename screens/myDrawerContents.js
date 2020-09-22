import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Text, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons'



export default function MyDrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggelTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }} >
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15 }}>
                                <Title style={styles.title}>Aakash Deep Rajoria </Title>
                                <Caption style={styles.caption}>@rajoriadeep</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}> Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}> Followers</Caption>
                            </View>

                        </View>

                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            onPress={() => props.navigation.navigate('Home')}
                            label='Home' icon={({ color, size }) => (
                                <MaterialIcons
                                    name='home-outline'
                                    color={color}
                                    size={size}
                                />
                            )} />
                        <DrawerItem
                            onPress={() => props.navigation.navigate('Profile')}
                            label='Profile' icon={({ color, size }) => (
                                <MaterialIcons
                                    name='account-outline'
                                    color={color}
                                    size={size} />
                            )} />
                        <DrawerItem
                            onPress={() => props.navigation.navigate('BookMarksScreen')}
                            label='Bookmarks'
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name='bookmark-outline'
                                    color={color}
                                    size={size} />
                            )} />
                        <DrawerItem
                            onPress={() => { return props.navigation.navigate('SettingsScreen') }}
                            label='Settings'
                            icon={({ color, size }) => (
                                <IonIcons
                                    name='settings-outline'
                                    color={color}
                                    size={size}
                                />
                            )} />
                        <DrawerItem
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                            label='Support'
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name='account-check-outline'
                                    color={color} size={size}
                                />
                            )} />

                    </Drawer.Section>
                    <Drawer.Section title='Preference'>
                        <TouchableRipple onPress={() => { toggelTheme() }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>

                            </View>
                        </TouchableRipple>

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem label='Sign Out' icon={({ color, size }) => (
                    <MaterialIcons onPress={() => { }} name='exit-to-app' color={color} size={size} />
                )} />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});