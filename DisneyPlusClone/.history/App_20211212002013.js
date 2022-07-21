/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView, StyleSheet, Image, Button, Text} from 'react-native';

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
      <Image
        source={require('./imgs/onboard/onboard.jpg')}
        style={styles.resized}
      />
      <Button></Button>
    </SafeAreaView>
  );
};

const Separator = () => {
  <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#1b1d29',
  },
  resized: {
    resizeMode: 'cover',
    height: '75%',
    width: '100%',
  },
  btn: {},
});

export default App;
