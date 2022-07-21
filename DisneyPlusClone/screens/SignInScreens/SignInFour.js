import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function SignInFour(props) {
  const pressNextBtn = () => {
    console.log('Press nextBtn');
  };

  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={pressNextBtn}>
        <Text style={styles.titletxt}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}

SignInFour.defaultProps = {
  name: 'SignInFour입니당',
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#3070CB',
    borderRadius: 4,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },

  titletxt: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    margin: 5,
    fontWeight: 'bold',
  },
});

export default SignInFour;
