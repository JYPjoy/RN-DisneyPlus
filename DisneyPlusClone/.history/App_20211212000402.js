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
  StyleSheet,
  View,
  Image,
  Button,
  Text,
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
    <SafeAreaView style={styles.full}>
      {/* <View> */}
      {/* <Text>안녕하세요 함수 컴포넌트입니다.</Text> */}
      <Image source={require('./imgs/onboard/onboard.jpg')}></Image>
      {/* </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#1b1d29',
  },
});

export default App;
