/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './screens/Onboarding';
// 따로 모으기 -> SignIn/SignUp/Main 3개로
import SignIn from './screens/SignInScreens/SignIn';
import SignUp from './screens/SignUpScreens/SignUp';
import SignInOne from './screens/SignInScreens/SignInOne';
import SignInTwo from './screens/SignInScreens/SignInTwo';
import Main from './screens/Main';

const Stack = createNativeStackNavigator();

const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Onboarding">
        {/* <Stack.Navigator initialRouteName="Main"> */}
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />

        <Stack.Screen
          name="SignInOne"
          component={SignInOne}
          options={{
            headerBackTitleVisible: false,
            headerTitle: '',
            headerStyle: {backgroundColor: '#1C1D2A'},
          }}
        />
        <Stack.Screen
          name="SignInTwo"
          component={SignInTwo}
          options={{
            headerBackTitleVisible: false,
            headerTitle: '',
            headerStyle: {backgroundColor: '#1C1D2A'},
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// function BackBtn() {
//   return (
//     <Image
//       source={require('./imgs/sign/backBtn.png')}
//       style={{marginLeft: 10, width: 22, height: 22}}
//     />
//   );
// }

export default App;
