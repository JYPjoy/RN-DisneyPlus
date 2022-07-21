/**
 * @format
 */

// import React from 'react';
// import {
//   SafeAreaView,
//   Image,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';

// //KeyboardAvoidingView p.146 키보드가 화면 가리지 않게 하기
// function SignInOne() {
//   const pressNextBtn = () => {
//     //onPress
//     console.log('Press nextBtn');
//   };

//   const pressJoinBtn = () => {
//     console.log('가입하기');
//   };

//   return (
//     <SafeAreaView style={styles.full}>
//       <Image source={require('../../imgs/dpLogo.png')} style={styles.logo} />
//       <Text style={styles.title}>이메일 주소로 로그인하세요</Text>
//       <View style={styles.emailbox}>
//         <TextInput
//           placeholder="이메일"
//           placeholderTextColor="#81868e"
//           keyboardType="email-address"
//           style={styles.input}
//         />
//       </View>
//       <TouchableOpacity style={styles.btn} onPress={pressNextBtn}>
//         <Text style={styles.btntxt}>다음</Text>
//       </TouchableOpacity>
//       <View style={{flexDirection: 'row'}}>
//         <Text style={styles.guide}>디즈니+에 처음이신가요?</Text>
//         <TouchableOpacity>
//           <Text style={styles.join} onPress={pressJoinBtn}>
//             가입
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   full: {
//     flex: 1,
//     backgroundColor: '#1C1D2A',
//   },
//   logo: {
//     alignSelf: 'center',
//     resizeMode: 'cover',
//     width: '30%',
//     marginTop: 10,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 25,
//     color: '#eeeeee',
//     marginLeft: 20,
//     marginTop: 10,
//   },
//   emailbox: {
//     backgroundColor: '#30343f',
//     borderColor: '#393D46',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginLeft: 20,
//     marginRight: 20,
//     marginTop: 10,
//     height: 40,
//   },
//   input: {
//     color: '#eeeeee',
//     fontSize: 16,
//     opacity: 1,
//     paddingVertical: 8,
//     paddingHorizontal: 8,
//   },
//   btn: {
//     backgroundColor: '#3070CB',
//     borderRadius: 5,
//     padding: 10,
//     margin: 10,
//     alignItems: 'center',
//     marginTop: 15,
//     marginLeft: 20,
//     marginRight: 20,
//   },
//   btntxt: {
//     fontSize: 17,
//     color: 'white',
//     textAlign: 'center',
//     margin: 5,
//     fontWeight: 'bold',
//   },
//   guide: {
//     fontSize: 15,
//     color: '#eeeeee',
//     marginLeft: 20,
//     marginTop: 10,
//   },
//   join: {
//     marginLeft: 6,
//     marginTop: 11,
//     color: '#ffffff',
//     fontWeight: 'bold',
//     fontSize: 15,
//   },
// });

// export default SignInOne;

//*****[[[Try]]]] */
import React from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
//import SignInTwo from './SignInTwo';

//KeyboardAvoidingView p.146 키보드가 화면 가리지 않게 하기
function SignInOne({navigation}) {
  const pressNextBtn = () => {
    //onPress
    console.log('Press nextBtn');
    //navigation.navigate('SignInTwo');
    navigation.navigate('Main');
  };

  const pressJoinBtn = () => {
    console.log('가입하기');
  };

  return (
    <SafeAreaView style={styles.full}>
      <Image source={require('../../imgs/dpLogo.png')} style={styles.logo} />
      <Text style={styles.title}>이메일 주소로 로그인하세요</Text>
      <View style={styles.emailbox}>
        <TextInput
          placeholder="이메일"
          placeholderTextColor="#81868e"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={pressNextBtn}>
        <Text style={styles.btntxt}>다음</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.guide}>디즈니+에 처음이신가요?</Text>
        <TouchableOpacity>
          <Text style={styles.join} onPress={pressJoinBtn}>
            가입
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    height: '15%',
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

export default SignInOne;
