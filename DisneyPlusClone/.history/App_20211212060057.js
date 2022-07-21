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
  View,
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
      <Text style={styles.guidetxt}>
        {'월 ₩9,900원에 구독하거나, 연 ₩99,000원에 1년 구독해\n'}
        {'15%를 절약하세요.'}
      </Text>
      <Separator />
      <TouchableOpacity>
        <Text>로그인</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Separator = () => <View style={styles.separator} />;

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
  guidetxt: {
    marginTop: 6,
    color: '#67696F',
    textAlign: 'center',
    fontSize: 15,
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#67696F',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
