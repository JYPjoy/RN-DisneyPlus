import React from 'react';
import {SafeAreaView, StyleSheet, Image, Text} from 'react-native';

function DownloadScreen() {
  return (
    <SafeAreaView style={[styles.full, {justifyContent: 'center'}]}>
      <Image
        source={require('../../imgs/search/download.png')}
        style={styles.download}></Image>
      <Text>저장한 콘텐츠가 없습니다.</Text>
      <Text>저장하는 영화와 시리즈가 여기에 표시됩니다.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  full: {
    backgroundColor: '#1C1D2A',
    flex: 1,
  },
  download: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '40%',
  },
  titletxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default DownloadScreen;
