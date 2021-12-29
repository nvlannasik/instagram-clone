import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Likes = ({post}) => {
  return (
    <View style={style.container}>
      <Text style={style.textLike}>
        {post.likes.toLocaleString('en')} Likes
      </Text>
    </View>
  );
};

export default Likes;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textLike: {
    marginLeft: 16,
    fontWeight: '500',
    color: '#0E0E0E',
  },
});
