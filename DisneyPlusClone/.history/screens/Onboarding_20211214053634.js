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

export default Onboarding;
