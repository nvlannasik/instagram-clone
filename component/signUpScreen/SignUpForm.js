import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';

const SignupForm = ({navigation}) => {
  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    username: Yup.string().required().min(2, 'A Username is required'),
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 6 characters'),
  });
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email: '', username: '', password: ''}}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={SignupFormSchema}
        validateOnMount={true}>
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Email Address"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.username.length || values.username.length >= 6
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Username"
                textContentType="username"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={false}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                textContentType="password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.signUpContainer}>
              <Text>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{color: '#0096F6'}}>Log In</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },

  inputField: {
    borderRadius: 4,
    paddingVertical: 2,
    paddingLeft: 8,
    backgroundColor: '#FAFAFA',
    marginBottom: 16,
    borderWidth: 1,
    height: 45,
    marginHorizontal: 8,
  },

  button: isValid => ({
    backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
    marginHorizontal: 8,
  }),

  buttonText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 20,
  },

  signUpContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50,
  },
});
