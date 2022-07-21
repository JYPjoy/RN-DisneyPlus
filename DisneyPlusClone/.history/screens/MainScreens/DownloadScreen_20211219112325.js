import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function DownloadScreen() {
  return (
    <SafeAreaView style={styles.full}>
      <Text>저장한 콘텐츠가 없습니다.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  full: {
    backgroundColor: '#1C1D2A',
    flex: 1,
  },
});

export default DownloadScreen;
