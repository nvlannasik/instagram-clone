import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Caption = ({post}) => {
  return (
    <View style={style.container}>
      <Text>
        <Text style={style.textUser}>{post.user}</Text>
        <Text style={style.textCaption}> {post.caption}</Text>
      </Text>
    </View>
  );
};

export default Caption;

const style = StyleSheet.create({
  container: {
    marginTop: 4,
    marginLeft: 16,
  },
  textUser: {
    fontWeight: '600',
    color: '#0E0E0E',
  },
  textCaption: {
    color: '#355551',
  },
});
