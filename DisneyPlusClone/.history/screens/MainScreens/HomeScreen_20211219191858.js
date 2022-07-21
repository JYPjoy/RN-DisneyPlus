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

      <LinearGradient
        // colors={['#4c669f', '#3b5998', '#192f6a']}
        colors={['#606c88', '#3f4c6b']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </LinearGradient>

      <View style={styles.viewAlign}>
        <TouchableOpacity style={styles.touchBtn}>
          <Image
            source={require('../../imgs/home/disney.png')}
            style={styles.imgBtn}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchBtn}>
          <Image
            source={require('../../imgs/home/pixar.png')}
            style={styles.imgBtn}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchBtn}>
          <Image
            source={require('../../imgs/home/marvel.png')}
            style={styles.imgBtn}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.viewAlign}>
        <TouchableOpacity style={styles.touchBtn}>
          <Image
            source={require('../../imgs/home/starwars.png')}
            style={styles.imgBtn}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchBtn}>
          <Image
            source={require('../../imgs/home/national.png')}
            style={styles.imgBtn}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchBtn}>
          <Image
            source={require('../../imgs/home/starlogo.png')}
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
    backgroundColor: 'green', //#141317
    alignSelf: 'center',
    flex: 1,
    margin: 5,
    alignItems: 'center',
    padding: 15,
  },
  imgBtn: {
    width: 60,
    height: 30,
    resizeMode: 'center',
  },

  linearGradient: {
    flex: 0.3,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default HomeScreen;
