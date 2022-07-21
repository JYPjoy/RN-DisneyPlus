/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React, {useEffect} from 'react';
// import SplashScreen from 'react-native-splash-screen';
// import {
//   SafeAreaView,
//   Image,
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import Alert from './modules/Alert';

// const App = () => {
//   // useEffect(() => {
//   //   SplashScreen.hide();
//   // }, []);
//   useEffect(() => {
//     setTimeout(() => {
//       SplashScreen.hide();
//     }, 1000);
//   }, []);

//   const pressSignUp = () => {
//     console.log('Sign Up');
//     Alert.alert('Hello world');
//     console.log({
//       string: Alert.STRING_VALUE,
//       number: Alert.NUMBER_VALUE,
//     });
//   };

//   const pressSignIn = () => {
//     console.log('Sign In');
//   };

//   return (
//     <SafeAreaView style={styles.full}>
//       <Image
//         source={require('./imgs/onboard/onboard.jpg')}
//         style={styles.resized}
//       />
//       <TouchableOpacity style={styles.btn} onPress={pressSignUp}>
//         <Text style={styles.titletxt}>지금 가입</Text>
//       </TouchableOpacity>
//       <Text style={styles.guidetxt}>
//         {'월 ₩9,900원에 구독하거나, 연 ₩99,000원에 1년 구독해\n'}
//         {'15%를 절약하세요.'}
//       </Text>
//       <Separator />
//       <TouchableOpacity style={{height: '100%'}} onPress={pressSignIn}>
//         <Text style={styles.titletxt}>로그인</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const Separator = () => <View style={styles.separator} />;

// const styles = StyleSheet.create({
//   full: {
//     flex: 1,
//     backgroundColor: '#1b1d29',
//   },
//   resized: {
//     resizeMode: 'cover',
//     height: '75%',
//     width: '100%',
//   },
//   btn: {
//     backgroundColor: '#3070CB',
//     borderRadius: 4,
//     padding: 10,
//     margin: 10,
//     alignItems: 'center',
//   },
//   titletxt: {
//     fontSize: 17,
//     color: 'white',
//     textAlign: 'center',
//     margin: 5,
//     fontWeight: 'bold',
//   },
//   guidetxt: {
//     marginTop: 6,
//     color: '#67696F',
//     textAlign: 'center',
//     fontSize: 15,
//   },
//   separator: {
//     marginVertical: 20,
//     borderBottomColor: '#67696F',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });

// export default App;

//#2
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
//import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Alert from './modules/Alert';

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

function App() {
  //const insets = useSafeAreaInsets(); //안 먹힘
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        labeled={false}
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
                style={{width: 200, height: 43}}
                source={require('./imgs/main/logo.jpg')}
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
});

export default App;
