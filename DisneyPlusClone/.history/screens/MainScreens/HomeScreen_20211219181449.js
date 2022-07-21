import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.full}>
      <Image source={require('../../imgs/dpLogo.png')} style={styles.logo} />

      <View>
        <TouchableOpacity style={styles.touchBtn}>
          <Image style={{width: 30, height: 30}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../imgs/search/film.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../imgs/search/television.png')} />
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
  touchBtn: {
    borderRadius: 5,
    backgroundColor: 'green', //#141317
    alignSelf: 'center',
    flex: 1,
    margin: 10,
    alignItems: 'center',
    padding: 10,
  },
});

export default HomeScreen;
