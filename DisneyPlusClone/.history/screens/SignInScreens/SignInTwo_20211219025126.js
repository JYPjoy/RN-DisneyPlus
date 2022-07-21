import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function SignInTwo(props) {
  const pressNextBtn = () => {
    //onPress
    console.log('Press nextBtn');
  };

  return (
    <View>
      <Text>안녕하세요 {props.name}!</Text>
      <TouchableOpacity style={styles.btn} onPress={pressNextBtn}>
        <Text style={styles.titletxt}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#1C1D2A',
  },
  logo: {
    alignSelf: 'center',
    resizeMode: 'cover',
    width: '40%',
    height: '13%',
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#eeeeee',
    marginLeft: 20,
    marginTop: 10,
  },
  emailbox: {
    backgroundColor: '#30343f',
    borderColor: '#393D46',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 40,
  },
  input: {
    color: '#eeeeee',
    fontSize: 16,
    opacity: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  btn: {
    backgroundColor: '#3070CB',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  btntxt: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    margin: 5,
    fontWeight: 'bold',
  },
  guide: {
    fontSize: 15,
    color: '#eeeeee',
    marginLeft: 20,
    marginTop: 10,
  },
  join: {
    marginLeft: 6,
    marginTop: 11,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
export default SignInTwo;
