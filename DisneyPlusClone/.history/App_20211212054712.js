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
  Image,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
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

  const pressJoin = () => {
    console.log('지금 가입');
  };

  return (
    <SafeAreaView style={styles.full}>
      <Image
        source={require('./imgs/onboard/onboard.jpg')}
        style={styles.resized}
      />
      <TouchableOpacity style={styles.btn} onPress={pressJoin}>
        <Text style={styles.titletxt}>지금 가입</Text>
      </TouchableOpacity>
      <Text color="#FFF">
        월 ₩9,900원에 구독하거나, 연 ₩99,000원에 1년 구독해\n15%를 절약하세요.
      </Text>
    </SafeAreaView>
  );
};

// const Separator = () => <View style={styles.separator} />;

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
  btn: {
    backgroundColor: '#3070CB',
    borderRadius: 4,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  titletxt: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
