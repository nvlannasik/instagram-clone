import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Comment = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={style.container}>
        <Text style={style.textComment}>
          <Text style={style.textUser}>{comment.user}</Text> {comment.comment}
        </Text>
      </View>
    ))}
  </>
);
export default Comment;

const style = StyleSheet.create({
  container: {
    marginLeft: 16,
    flexDirection: 'row',
  },
  textUser: {
    fontWeight: '600',
    color: '#0E0E0E',
  },
  textComment: {
    color: '#355551',
  },
});
