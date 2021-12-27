import React from 'react';
import {View, Text} from 'react-native';
import {Divider} from 'react-native-elements';
import PostHeader from './PostHeader';

const Post = ({post}) => {
  return (
    <View>
      <Divider width={1} orientation="vertical" />
      <PostHeader />
      <Text>post</Text>
    </View>
  );
};

export default Post;
