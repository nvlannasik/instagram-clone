import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Likes = ({post}) => {
  return (
    <View style={style.container}>
      <Text>{post.likes.toLocaleString('en')} Likes</Text>
    </View>
  );
};

export default Likes;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 4,
  },
});
