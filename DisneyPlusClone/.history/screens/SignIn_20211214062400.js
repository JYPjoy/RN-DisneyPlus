import React from 'react';
import {View, Text} from 'react-native';

function SignIn(props) {
  return (
    <View>
      <Text>안녕하세요 {props.name}!</Text>
    </View>
  );
}

SignIn.defaultProps = {
  name: 'SignIn입니당',
};

export default SignIn;
