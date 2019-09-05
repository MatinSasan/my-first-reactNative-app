import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Navbar = ({name}) => {
  const {nav} = styles;

  return (
    <View style={nav}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
});

export default Navbar;
