import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Divider} from 'react-native-elements';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

const Post = ({post}) => {
  return (
    <View style={style.container}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});

export default Post;
