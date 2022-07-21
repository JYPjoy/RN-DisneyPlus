/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  SafeAreaView,
  View,
  Image,
  Button,
  Text,
  StyleSheet,
} from 'react-native';

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
    <SafeAreaView>
      <View>
        {/* <Text>안녕하세요 함수 컴포넌트입니다.</Text> */}
        <Image source={require('./imgs/onboard/onboard.jpg')}></Image>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

export default App;
