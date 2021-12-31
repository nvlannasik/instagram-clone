import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIo from 'react-native-vector-icons/Ionicons';

const PostFooter = ({handleLike, post}) => {
  return (
    <View style={style.container}>
      <View style={style.spasi}>
        <View style={{marginLeft: 16}}>
          <TouchableOpacity onPress={() => handleLike(post)}>
            <Icon name="heart-o" size={25} color="#181818" />
          </TouchableOpacity>
        </View>
        <View style={style.flip}>
          <IconIo name="chatbubble-outline" size={25} color="#181818" />
        </View>
        <View style={{marginLeft: 16}}>
          <IconFeather
            name="send"
            size={25}
            color="#181818"
            style={style.rotasi}
          />
        </View>
      </View>
      <View style={style.bookmarkIconContainer}>
        <Icon name="bookmark-o" size={25} color="#181818" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
  },
  spasi: {
    flexDirection: 'row',
    width: '50%',
  },
  bookmarkIconContainer: {
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 16,
  },
  rotasi: {
    transform: [{rotate: '16deg'}],
  },
  flip: {
    transform: [{scaleX: -1}],
    marginLeft: 16,
  },
});

export default PostFooter;
