import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

function DownloadScreen() {
  return (
    <SafeAreaView style={styles.full}></SafeAreaView>;
  );
 
}

const styles = StyleSheet.create({
  full: {
    backgroundColor: '#1C1D2A',
    flex: 1,
  },
});

export default DownloadScreen;
