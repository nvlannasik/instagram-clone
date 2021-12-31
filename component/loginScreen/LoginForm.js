import React, { useState} from 'react';
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

const LoginForm = ({navigation}) => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const ReadData = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/ig/username/'+username);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      navigation.navigate('HomeScreen');
    }
  }

  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 6 characters'),
  });
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}>
        {({ handleBlur, values}) => (
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
                placeholder="Phone number, username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={setUsername}
                onBlur={handleBlur('email')}
                value={username}
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
                onChangeText={setPassword}
                onBlur={handleBlur('password')}
                value={password}
              />
            </View>
            <View style={styles.textForgot}>
              <Text style={{color: '#6BB0F5'}}>Forgot Password?</Text>
            </View>

            <Pressable
              titleSize={20}
              style={styles.button}
              onPress={() => ReadData()}
              >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            <View style={styles.signUpContainer}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
                <Text style={{color: '#0096F6'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },

  inputField: {
    borderRadius: 4,
    paddingVertical: 2,
    paddingLeft: 8,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
    height: 45,
    marginHorizontal: 8,
  },

  button: {
    backgroundColor: '#0096F6',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
    marginHorizontal: 8,
  },

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
  textForgot: {
    alignItems: 'flex-end',
    marginBottom: 30,
    marginRight: 8,
  },
});
