import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';

function SearchScreen() {
  return <SafeAreaView style={styles.full}></SafeAreaView>;
}

const styles = StyleSheet.create({
  full: {
    backgroundColor: '#1C1D2A',
    flex: 1,
  },
});

export default SearchScreen;
