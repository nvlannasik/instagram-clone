import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import SignupForm from '../component/signUpScreen/SignUpForm';

const SignUpScreen = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={require('../assets/ig.png')}
        style={{height: 100, width: 100}}
      />
    </View>
    <SignupForm navigation={navigation} />
  </View>
);

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12,
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
});
