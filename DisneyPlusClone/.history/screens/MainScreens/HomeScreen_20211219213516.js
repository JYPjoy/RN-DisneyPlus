import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.full}>
      <Image source={require('../../imgs/dpLogo.png')} style={styles.logo} />

      {/* <LinearGradient
        colors={['#485563', '#29323c']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </LinearGradient> */}

      <View style={styles.viewAlign}>
        <TouchableOpacity style={styles.touchBtn}></TouchableOpacity>
        <TouchableOpacity style={styles.touchBtn}></TouchableOpacity>
        <TouchableOpacity style={styles.touchBtn}></TouchableOpacity>
      </View>
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
  viewAlign: {
    //flexDirection: 'row',
    //alignContent: 'space-around',
  },

  touchBtn: {
    borderRadius: 5,
    backgroundColor: 'green', //
    flex: 1,
    margin: 5,
    padding: 30,
    alignItems: 'center',
  },

  // imgBtn: {
  //   width: 70,
  //   height: 20,
  // },
});

export default HomeScreen;
