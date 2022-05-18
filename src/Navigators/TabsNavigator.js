import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { FavsContainer } from '../Containers/FavsContainer';
import { HomeContainer } from '../Containers/HomeContainer';
import { DetailContainer } from '../Containers';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

function HomeNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#000',
                },
                tabBarActiveTintColor: 'white'
            }}
        >
            <Tab.Screen name="Home" component={HomeContainer} />
            <Stack.Screen
                name="Detail"
                component={DetailContainer} />
        </Stack.Navigator>
    );
}

function FavsNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#000',
                },
                tabBarActiveTintColor: 'white'
            }}
        >
            <Tab.Screen name="Favs" component={FavsContainer} />
            <Stack.Screen
                name="Detail"
                component={DetailContainer} />
        </Stack.Navigator>
    );
}

export { HomeNavigator, FavsNavigator }
