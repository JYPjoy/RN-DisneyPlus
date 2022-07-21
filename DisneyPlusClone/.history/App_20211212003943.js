/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView, Image, Button, Text, StyleSheet} from 'react-native';

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
      <Button
        style={styles.button}
        // onPress={onPressLearnMore}
      />
      <Separator />
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
  button: {
    title: '지금 가입',
    color: '#FFF',
    backgroundColor: '#3070CB',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
