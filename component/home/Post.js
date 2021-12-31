import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Likes from './Likes';
import Caption from './Caption';
import CommentSection from './CommentSection';
import Comment from './Comment';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Post = ({post}) => {
  const handleLike = post => {
    const currentLikeStatus = !post.likes_by_users.includes(
      auth().currentUser.email,
    );
    firestore()
      .collection('users')
      .doc(post.owner_email)
      .collection('posts')
      .doc(post.id)
      .update({
        likes_by_users: currentLikeStatus
          ? firestore.FieldValue.arrayUnion(auth().currentUser.email)
          : firestore.FieldValue.arrayRemove(auth().currentUser.email),
      })
      .then(() => {
        console.log('doc sukses update');
      })
      .catch(error => {
        console.error('error update doc', error);
      });
  };
  return (
    <View style={style.container}>
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} handleLike={handleLike} />
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
