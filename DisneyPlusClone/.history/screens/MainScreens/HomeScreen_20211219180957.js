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
              uri: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA2MTlfMTYg/MDAxNTYwOTMzNzg4ODQw.lzyJU0q85SIAbFC9B7yHdDvcQBEWlsYb2i2yybLkTQgg.pCfOjxJgZu2ufPJ87p-mCiJLGv-a_t6bFJdVmdKz5qwg.JPEG.jby900201/aladdin_poster_goldposter_com_22.jpg?type=w800',
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
