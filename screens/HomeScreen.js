import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../component/home/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default HomeScreen;
