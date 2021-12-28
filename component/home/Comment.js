import React from 'react';
import {View, Text} from 'react-native';

const Comment = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{flexDirection: 'row'}}>
        <Text>
          <Text>{comment.user}</Text> {comment.comment}
        </Text>
      </View>
    ))}
  </>
);
export default Comment;
