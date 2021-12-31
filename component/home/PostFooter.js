import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIo from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

const PostFooter = ({handleLike, post}) => {
  return (
    <View style={style.container}>
      <View style={style.spasi}>
        <View style={{marginLeft: 16}}>
          <TouchableOpacity onPress={() => handleLike(post)}>
            <Image
              style={style.footerIcon}
              source={{
                uri: post.likes_by_users.includes(auth().currentUser.email)
                  ? postFooterIcons[0].likedImageUrl
                  : postFooterIcons[0].imageUrl,
              }}
            />
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

const postFooterIcons = [
  {
    name: 'Like',
    imageUrl: 'https://img.icons8.com/fluency-systems-regular/344/like.png',
    likedImageUrl:
      'https://img.icons8.com/ios-glyphs/90/fa314a/filled-like.png',
  },
];

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
  footerIcon: {
    height: 28,
    width: 28,
  },
});

export default PostFooter;
