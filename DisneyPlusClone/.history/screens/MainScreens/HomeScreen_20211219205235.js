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
      <View style={styles.viewAlign}>
        <TouchableOpacity style={styles.touchBtn}>
          <LinearGradient colors={['#485563', '#29323c']}>
            <Text>안녕</Text>
          </LinearGradient>
        </TouchableOpacity>

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
    flexDirection: 'row',
    //alignContent: 'space-around',
  },
  touchBtn: {
    // backgroundColor: 'green',
    flex: 1,
    width: 50,
    height: 50,
  },
});

export default HomeScreen;
