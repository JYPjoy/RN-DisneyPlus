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
    borderColor: '#485563',
    borderWidth: 1,
    backgroundColor: '#29323c', //
    flex: 1,
    margin: 5,
    padding: 10,
    alignItems: 'center',
  },
  imgBtn: {
    width: 70,
    height: 35,
    resizeMode: 'center',
  },
});

export default HomeScreen;
