import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import HomeScreen from 'App/Containers/HomeScreen/'
import ProfileScreen from 'App/Containers/ProfileScreen/'

import { Colors } from 'App/Theme/'

const TabBarComponent = (props) => <BottomTabBar {...props} />

export const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({ tintColor }) => <FontAwesome name="home" size={25} color={tintColor} />,
      },
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Me',
        tabBarIcon: ({ tintColor }) => <FontAwesome name="user" size={25} color={tintColor} />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.text,
    },
    tabBarComponent: (props) => <TabBarComponent {...props} style={styles.tabBarStyle} />,
  }
)

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.primary,
  },
})
