import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {USERS} from '../../data/user';
import {Divider} from 'react-native-elements';

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{alignItems: 'center'}}>
            <Image source={{uri: story.image}} style={style.story} />
            <Text>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + '...'
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
      <Divider width={1} orientation="vertical" />
    </View>
  );
};

const style = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#C13584',
  },
});

export default Stories;
