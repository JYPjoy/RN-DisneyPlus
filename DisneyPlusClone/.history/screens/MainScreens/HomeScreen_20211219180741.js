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
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://e7.pngegg.com/pngimages/548/83/png-clipart-walt-disney-records-the-walt-disney-company-logo-music-others-miscellaneous-cdr.png',
            }}
          />
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
});

export default HomeScreen;
