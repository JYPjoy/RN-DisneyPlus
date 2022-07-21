import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.full}>
      <Image source={require('../../imgs/dpLogo.png')} style={styles.logo} />

      <View>
        <TouchableOpacity style={styles.touchBtn}>
          <Image source={require('../../imgs/search/star.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchBtn}>
          <Image source={require('../../imgs/search/film.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchBtn}>
          <Image
            source={require('../../imgs/search/television.png')}
            style={styles.imgBtn}
          />
          <Text style={styles.textBtn}>시리즈</Text>
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
});

export default HomeScreen;
