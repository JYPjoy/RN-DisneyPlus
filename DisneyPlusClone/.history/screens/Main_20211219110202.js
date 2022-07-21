import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, Text, Image, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './MainScreens/HomeScreen';
import SearchScreen from './MainScreens/SearchScreen';
import DownloadScreen from './MainScreens/DownloadScreen';
import ProfileScreen from './MainScreens/ProfileScreen';

const Tab = createBottomTabNavigator();
const theme = {
  //like this
  colors: {
    background: 'transparent',
  },
};

function Main() {
  return (
    <NavigationContainer independent={true} theme={theme}>
      <Tab.Navigator
        labeled={false}
        initialRouteName="Home"
        safeAreaInsets={{bottom: 0}}
        screenOptions={{
          tabBarActiveBackgroundColor: '#191d29',
          tabBarInactiveBackgroundColor: '#141317', //#ffffff
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#929296',
          tabBarStyle: {height: 80, borderTopWidth: 0},
          tabBarIconStyle: {paddingBottom: 25},
          borderTopWidth: 0,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: 'Search',
            headerStyle: {
              backgroundColor: '#191d29',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Download"
          component={DownloadScreen}
          options={{
            title: 'Download',
            headerStyle: {
              backgroundColor: '#191d29',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: ({color, size}) => (
              <Icon name="file-download" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#191d29',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: ({color, size}) => (
              <Icon name="account-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  full: {
    backgroundColor: '#1C1D2A',
    flex: 1,
  },
});

export default Main;
