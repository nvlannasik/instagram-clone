import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../component/home/Header';
import Navbar, {bottomTabIcons} from '../component/home/Navbar';
import Post from '../component/home/Post';
import Stories from '../component/home/Stories';
import {POSTS} from '../data/posts';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = ({navigation}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore()
      .collectionGroup('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        setPosts(
          snapshot.docs.map(post => ({
            id: post.id,
            ...post.data(),
          })),
        );
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories />
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <Navbar icons={bottomTabIcons} />
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
