import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';

function SearchScreen() {
  <SafeAreaView style={styles.full}>
    return <Text>Search</Text>;
  </SafeAreaView>;
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

export default SearchScreen;
