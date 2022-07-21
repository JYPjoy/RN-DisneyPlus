// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SignInOne from './SignInOne';
// import SignInTwo from './SignInTwo';

// const Stack = createNativeStackNavigator();

// const SignIn = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SignInOne">
//         <Stack.Screen name="SignInOne" component={SignInOne} />
//         <Stack.Screen name="SignInTwo" component={SignInTwo} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default SignIn;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function SignIn() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SignIn;
