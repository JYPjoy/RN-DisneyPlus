//

import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
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
        <TouchableOpacity style={styles.touchBtn}>
          <LinearGradient colors={['#485563', '#29323c']}></LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchBtn}></TouchableOpacity>
        <TouchableOpacity style={styles.touchBtn}>
          <Image
            source={require('../../imgs/home/marvel.png')}
            style={styles.imgBtn}
          />
        </TouchableOpacity>
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
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  touchBtn: {
    borderRadius: 5,
    backgroundColor: '#29323c', //#141317
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center',
    padding: 15,
    margin: 20,
  },
  imgBtn: {
    width: '60%',
    height: '20%',
    resizeMode: 'center',
    borderRadius: 5,
  },
});

export default HomeScreen;
