//

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

      <LinearGradient
        colors={['#c0392b', '#f1c40f', '#8e44ad']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>I am a button</Text>
        </TouchableOpacity>
      </LinearGradient>
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
    backgroundColor: 'green',
    flex: 1,
    width: 50,
    height: 50,
  },
});

export default HomeScreen;
