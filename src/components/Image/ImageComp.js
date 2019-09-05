import React from 'react';
import {Image, StyleSheet} from 'react-native';

import greatImage from '../../assets/images/img.jpg';

const ImageComp = () => {
  return (
    <Image source={greatImage} style={styles.greatImg} resizeMode="contain" />
  );
};

const styles = StyleSheet.create({
  greatImg: {
    width: '100%',
    height: 300,
    marginTop: 10,
  },
});

export default ImageComp;
