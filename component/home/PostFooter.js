import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PostFooter = () => {
  return (
    <View style={style.container}>
      <View style={style.spasi}>
        <Icon name="heart-o" size={25} color="#000000" />
        <Icon name="comment-o" size={25} color="#000000" />
        <Icon name="send-o" size={25} color="#000000" />
      </View>
      <View style={style.bookmarkIconContainer}>
        <Icon name="bookmark-o" size={25} color="#000000" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  spasi: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-between',
  },
  bookmarkIconContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default PostFooter;
