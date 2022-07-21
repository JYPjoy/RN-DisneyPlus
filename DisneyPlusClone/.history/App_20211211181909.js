/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView, View, Text} from 'react-native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>안녕하세요 함수 컴포넌트입니다.</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
