import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {SignedInStack, SignedOutStack} from './screens/navigation';
import auth from '@react-native-firebase/auth';
import {useGestureHandlerRef} from 'react-navigation-stack';

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const userHandler = user =>
    user ? setCurrentUser(user) : setCurrentUser(null);

  useEffect(() => {
    auth().onAuthStateChanged(user => userHandler(user));
  }, []);
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
