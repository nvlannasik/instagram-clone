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

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const MakeAccount = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/ig', {
        method : 'POST',
        headers : {
          Accept : 'application/json',
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          username : username,
          email : email,
          password : password
        })
      });
    } catch (error) {
      console.error(error);
    } finally {
      navigation.navigate('LoginScreen');
    }
  }

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
        {({ handleBlur, values, isValid}) => (
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
                onChangeText={setEmail}
                onBlur={handleBlur('email')}
                value={email}
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
                onChangeText={setUsername}
                onBlur={handleBlur('username')}
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
            <Pressable
              titleSize={20}
              style={styles.button}
              onPress={() => MakeAccount()}
              >
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

  button : {
    backgroundColor : '#0096F6',
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
});
