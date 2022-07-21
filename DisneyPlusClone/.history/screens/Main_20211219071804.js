import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, Text, Image, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './MainScreens/HomeScreen';

const Tab = createBottomTabNavigator();

function SearchScreen() {
  return <Text>Search</Text>;
}

function DownloadScreen() {
  return <Text>Download</Text>;
}

function ProfileScreen() {
  return <Text>Profile</Text>;
}

function Main() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        labeled={false}
        initialRouteName="Home"
        // tabBarOptions={{
        //   safeAreaInset: {bottom: 'never', top: 'never'},
        // }}
        screenOptions={{
          tabBarActiveBackgroundColor: '#191d29',
          tabBarInactiveBackgroundColor: '#191d29',
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#fff',
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
    flex: 0.5,
  },
  logo: {
    alignSelf: 'center',
    width: '30%',
    alignItems: 'center',
    resizeMode: 'cover',
    marginTop: 13,
  },
});

export default Main;
