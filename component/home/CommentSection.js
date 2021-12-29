import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CommentSection = ({post}) => {
  return (
    <View style={style.container}>
      {!!post.comments.length && (
        <Text style={style.textSemua}>
          View {post.comments.length > 1 ? 'all' : ' '}{' '}
          {post.comments.length > 1 ? 'comments' : 'comment'}
        </Text>
      )}
    </View>
  );
};

export default CommentSection;

const style = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginTop: 4,
    marginBottom: 1,
  },
  textSemua: {
    fontWeight: '500',
  },
});
