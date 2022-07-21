import React from 'react';
import {SafeAreaView, StyleSheet, Image, Text} from 'react-native';

function DownloadScreen() {
  return (
    <SafeAreaView
      style={[styles.full, {justifyContent: 'center', alignItems: 'center'}]}>
      <Image
        source={require('../../imgs/search/download.png')}
        style={styles.download}
      />
      <Text style={styles.title}>저장한 콘텐츠가 없습니다.</Text>
      <Text style={styles.description}>
        저장하는 영화와 시리즈가 여기에 표시됩니다.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  full: {
    backgroundColor: '#1C1D2A',
    flex: 1,
  },
  download: {
    width: '35%',
    height: '20%',
  },
  title: {
    marginTop: 30,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    color: '#929296',
    fontSize: 15,
  },
});

export default DownloadScreen;
