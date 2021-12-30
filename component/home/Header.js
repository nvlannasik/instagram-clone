import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconWe from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';

const handleSignOut = async () => {
  try {
    await auth().signOut();
    console.log('Signed Out');
  } catch (error) {
    console.log(error);
  }
};

const Header = ({navigation}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={handleSignOut}>
        <Image source={require('../../assets/logo.png')} style={style.logo} />
      </TouchableOpacity>
      <View style={style.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Icon
            name="add-circle-outline"
            size={30}
            style={{marginRight: 16}}
            color={'#2C2C2C'}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="heart-outline"
            size={30}
            style={{marginRight: 16}}
            color={'#2C2C2C'}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.notifBadge}>
            <Text style={style.notifBadgeText}>11</Text>
          </View>
          <IconWe
            name="facebook-messenger"
            size={25}
            style={{marginRight: 16}}
            color={'#2C2C2C'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 16,
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
  },
  notifBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 14,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    zIndex: 100,
  },
  notifBadgeText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default Header;
