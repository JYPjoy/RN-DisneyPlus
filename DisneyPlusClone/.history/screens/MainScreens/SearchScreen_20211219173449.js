import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

const data = [
  {
    key: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA2MTlfMTYg/MDAxNTYwOTMzNzg4ODQw.lzyJU0q85SIAbFC9B7yHdDvcQBEWlsYb2i2yybLkTQgg.pCfOjxJgZu2ufPJ87p-mCiJLGv-a_t6bFJdVmdKz5qwg.JPEG.jby900201/aladdin_poster_goldposter_com_22.jpg?type=w800',
  },
  {
    key: 'https://www.themoviedb.org/t/p/original/fdjGwXvtEglJn8AlxHeupDLFzHW.jpg',
  },
  {
    key: 'https://lh3.googleusercontent.com/AiMJPGiG7_USCY3oLhaayhHeQeMNS4UX8s33aTAl0SGtefMmLJYzxpxz8A7dU7oOmAYZq35xjWbvJimUuCF7tjiQ7NSS4IC8Zcnd9TKd_2CR4tSPnm3aZprHAo26j6QinWHIIT6V',
  },
  {
    key: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA0MjhfMjkx/MDAxNTU2NDUzMzkxNTY2.G4LSGEq28kBse1QFvw-EZkYAxPdKu_NuMINSY8uiPxwg.qOlb87gS-Xr22aaJq34lG240bA24hSy_ejsN1CLmwUMg.JPEG.yongji1592/%EC%9D%B8%ED%94%BC%EB%8B%88%ED%8B%B0%EC%9B%8C.jpg?type=w800',
  },
  {
    key: 'https://w.namu.la/s/f40f3e38b4f34c3c86718bb14ce206227f3bae462665bf829635b510359cd2fc2ef8bb31688eda47de4eee3865f6c1c4a82e22db79984c874aaa8c1ac8bff4edf950bdfa53dff7f28f1068b81277b997',
  },
  {
    key: 'https://imgc.1300k.com/aaaaaib/events/plan/125000/124337_tpl3mo_5fe9a8f2235f57817cbea8f8c62cb8.jpg',
  },
  {
    key: 'https://w.namu.la/s/f8ce2d9683fb707afed66449f3a74195fdb90c5e405333d5a54d488c2e268845da5fa114accbba6de4ec812848e1869ac845227fc437314ce96dcbb0c43fdb52076d609e72b0cfb1e4b98d3c450e10ec0e3689b4aa856ceff71fb0f3d6885ec2',
  },
  {
    key: 'https://w.namu.la/s/a60874eddb91d70cb5d03f3d8236520d993035a7465207df6afa6709084a992ecf2acb204bdd01bf5b32b634410f33bf9cacd2d1000291925df391b040c01642624e3c66d1832fab9a913823411859b5',
  },
  {
    key: 'https://mblogthumb-phinf.pstatic.net/MjAxOTAzMzFfMjg4/MDAxNTU0MDM2MjYxNTc3.7ZDZfEtYsh2fyyxf0uZFPxrV6sXHrt13ilOknF1jk1Qg.WcYzFbGBu_HLDL5zId2VL_JbnD6nk9VyD8geaAXG6SMg.JPEG.alsdl9063/qewewqqew.jpg?type=w800',
  },
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;
export default class SearchScreen extends React.Component {
  renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        {/* <Text style={styles.itemText}>{item.key}</Text> */}
        <Image
          source={{uri: item.key}}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 5,
            resizeMode: 'cover',
          }}
        />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.full}>
        <Text style={{color: 'white', size: 20}}>SearchBar</Text>
        <Text style={styles.titleText}>컬렉션 둘러보기</Text>
        <View style={styles.viewAlign}>
          <TouchableOpacity style={styles.touchBtn}>
            <Image
              source={require('../../imgs/search/star.png')}
              style={styles.imgBtn}
            />
            <Text style={styles.textBtn}>오리지널</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchBtn}>
            <Image
              source={require('../../imgs/search/film.png')}
              style={styles.imgBtn}
            />
            <Text style={styles.textBtn}>영화</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchBtn}>
            <Image
              source={require('../../imgs/search/television.png')}
              style={styles.imgBtn}
            />
            <Text style={styles.textBtn}>시리즈</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={formatData(data, numColumns)}
          style={styles.container}
          renderItem={this.renderItem}
          numColumns={numColumns}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#1b1d29',
  },
  container: {
    marginTop: 0,
    //marginVertical: 0,
    //flex: 1,
  },
  titleText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
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
    margin: 10,
    alignItems: 'center',
    padding: 10,
  },
  imgBtn: {
    width: 50,
    height: 50,
  },
  textBtn: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 5,
  },
  item: {
    borderRadius: 5,
    backgroundColor: '#141317',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    height: Dimensions.get('window').width / 2,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});
