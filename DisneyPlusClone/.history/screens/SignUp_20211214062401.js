import React from 'react';
import {View, Text} from 'react-native';

function SignUp(props) {
  return (
    <View>
      <Text>안녕하세요 {props.name}!</Text>
    </View>
  );
}

SignUp.defaultProps = {
  name: 'SignUp입니당',
};

export default SignUp;
