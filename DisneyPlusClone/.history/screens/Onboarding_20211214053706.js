import React from 'react';
import {SafeAreaView, Image, TouchableOpacity, Text} from 'react-native';

function Onboarding({navigation}) {
    const pressSignUp = () => {
        console.log('Sign Up');
        Alert.alert('Hello world');
        console.log({
          string: Alert.STRING_VALUE,
          number: Alert.NUMBER_VALUE,
        });
      };
    
      const pressSignIn = () => {
        console.log('Sign In');
      };
    
    return();
}


const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#1b1d29',
  },
  resized: {
    resizeMode: 'cover',
    height: '75%',
    width: '100%',
  },
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
  guidetxt: {
    marginTop: 6,
    color: '#67696F',
    textAlign: 'center',
    fontSize: 15,
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#67696F',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});


export default Onboarding;
