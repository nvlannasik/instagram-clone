import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../component/home/Header';
import Post from '../component/home/Post';
import Stories from '../component/home/Stories';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <Post />
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
