import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Likes from './Likes';
import Caption from './Caption';
import CommentSection from './CommentSection';
import Comment from './Comment';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

const Post = ({post}) => {
  return (
    <View style={style.container}>
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter />
      <Likes post={post} />
      <Caption post={post} />
      <CommentSection post={post} />
      <Comment post={post} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});

export default Post;
