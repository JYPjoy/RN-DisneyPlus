import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
//import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Alert from '../modules/Alert';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  const tabApBan = () => {
    // console.log('hello AdPie-Banner');
    Alert.alert('Hello World');
    console.log({
      string: Alert.STRING_VALUE,
      number: Alert.NUMBER_VALUE,
    });
  };
  const tabApInter = () => {
    console.log('hello AdPie-Interstitial');
  };
  const tabEbNative = () => {
    console.log('hello ExelBid-Native');
  };
  return (
    <View>
      <Button
        title="adPie 전면 배너"
        onPress={tabApInter}
        style={styles.button}
      />
      <Button title="adPie 배너 광고(사각)" onPress={tabApBan} />
      <Button title="ExelBid 네이티브 배너" onPress={tabEbNative} />
    </View>
  );
}

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
  //const insets = useSafeAreaInsets(); //안 먹힘
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        labeled={false}
        initialRouteName="Home"
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
            title: '디즈니로고',
            headerStyle: {
              backgroundColor: '#191d29',
            },
            headerTintColor: '#fff',

            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: () => (
              <Image
                style={{width: '30%'}}
                // source={require('../imgs/main/logo.jpg')}
                source={require('../imgs/dpLogo.png')}
              />
            ),
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
  button: {
    backgroundColor: 'red',
  },
  logo: {
    alignSelf: 'center',
    resizeMode: 'cover',
    width: '30%',
    marginTop: 10,
  },
});

export default Main;
