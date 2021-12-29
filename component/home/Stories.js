import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {USERS} from '../../data/user';
import {Divider} from 'react-native-elements';

const Stories = () => {
  return (
    <View style={style.container}>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {USERS.map((story, index) => (
            <View key={index} style={style.viewStoriesContainer}>
              <Image source={{uri: story.image}} style={style.story} />
              <Text style={style.textStori}>
                {story.user.length > 11
                  ? story.user.slice(0, 10).toLowerCase() + '...'
                  : story.user.toLowerCase()}
              </Text>
            </View>
          ))}
        </ScrollView>
        <Divider width={1} orientation="vertical" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,

    borderWidth: 3,
    borderColor: '#C13584',
  },
  container: {
    marginBottom: 8,
  },
  wrapper: {
    marginLeft: 8,
  },
  viewStoriesContainer: {
    marginBottom: 6,
    alignItems: 'center',
    marginLeft: 16,
  },
  textStori: {
    color: '#000000',
    fontWeight: '500',
  },
});

export default Stories;
