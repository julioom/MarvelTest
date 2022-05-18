import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FavsNavigator, HomeNavigator } from './TabsNavigator';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
const ApplicationNavigator = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000',
          },
          tabBarActiveTintColor: 'white'
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faHome} size={20} color={color} />
            ),
          }} />
        <Tab.Screen
          name="Favs"
          component={FavsNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faHeart} size={20} color={color} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default ApplicationNavigator
