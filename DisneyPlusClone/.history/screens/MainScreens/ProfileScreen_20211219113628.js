import React from 'react';
import {SafeAreaView, StyleSheet, Image} from 'react-native';

function ProfileScreen() {
  return <SafeAreaView style={styles.full}></SafeAreaView>;
}

const styles = StyleSheet.create({
  full: {
    backgroundColor: '#1C1D2A',
    flex: 1,
  },
});
export default ProfileScreen;
