import React from 'react';
import {View, Text} from 'react-native';

const CommentSection = ({post}) => {
  return (
    <View>
      {!!post.comments.length && (
        <Text>
          View {post.comments.length > 1 ? 'all' : ' '}{' '}
          {post.comments.length > 1 ? 'comments' : 'comment'}
        </Text>
      )}
    </View>
  );
};

export default CommentSection;
