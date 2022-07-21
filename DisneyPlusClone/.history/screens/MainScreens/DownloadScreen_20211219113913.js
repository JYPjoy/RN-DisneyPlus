import React from 'react';
import {SafeAreaView, StyleSheet, Image, Text} from 'react-native';

function DownloadScreen() {
  return (
    <SafeAreaView style={styles.full}>
      <Image source={require('../../imgs/search/download.png')}></Image>
      <Text>저장한 콘텐츠가 없습니다.</Text>
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
  },
});

export default DownloadScreen;
