import React from 'react';
import {StyleSheet, SafeAreaView, Image, Button} from 'react-native';

function HomeScreen() {
  // const tabApBan = () => {
  //   console.log('hello AdPie-Banner');
  // };
  // const tabApInter = () => {
  //   console.log('hello AdPie-Interstitial');
  // };
  // const tabEbNative = () => {
  //   console.log('hello ExelBid-Native');
  // };
  return (
    <SafeAreaView style={styles.full}>
      <Image source={require('../../imgs/dpLogo.png')} style={styles.logo} />
      {/* <Button
        title="adPie 전면 배너"
        onPress={tabApInter}
        style={styles.button}
      />
      <Button title="adPie 배너 광고(사각)" onPress={tabApBan} />
      <Button title="ExelBid 네이티브 배너" onPress={tabEbNative} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  full: {
    backgroundColor: '#1C1D2A',
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    width: '30%',
    alignItems: 'center',
    resizeMode: 'cover',
    marginTop: 13,
  },
});

export default HomeScreen;
