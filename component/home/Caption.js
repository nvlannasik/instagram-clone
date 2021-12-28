import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Caption = ({post}) => {
  return (
    <View style={{marginTop: 5}}>
      <Text>
        <Text style={{fontWeight: '600'}}>{post.user}</Text>
        <Text> {post.caption}</Text>
      </Text>
    </View>
  );
};

export default Caption;
