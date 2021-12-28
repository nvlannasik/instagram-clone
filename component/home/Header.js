import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Image
          style={StyleSheet.logo}
          source={require('../../assets/logo.png')}
        />
      </TouchableOpacity>
      <View style={style.iconsContainer}>
        <TouchableOpacity>
          <Icon name="add-circle-outline" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="heart-outline" size={30} />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={style.notifBadge}>
            <Text style={style.notifBadgeText}>11</Text>
          </View>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios/50/000000/facebook-messenger--v1.png',
            }}
            style={style.icon}
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
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
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
    left: 20,
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
