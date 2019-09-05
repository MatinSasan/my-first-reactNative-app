/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, ActivityIndicator} from 'react-native';

import Navbar from './src/components/Nav/Navbar';
import Generate from './src/components/Generator/Generator';
import ListItem from './src/components/Generator/ListItem';
import Input from './src/components/Input/Input';
import PickerComp from './src/components/Picker/Picker';
import ImageComp from './src/components/Image/ImageComp';
import ModalComp from './src/components/Modal/ModalComp';

const App = () => {
  const [nameOfApp, setNameApp] = useState('My Awesome app');
  const [random, setRandom] = useState([20, 13]);
  const [loading, setLoading] = useState(false);

  const onAddRandom = () => {
    const newRandom = Math.floor(Math.random() * 100) + 1;
    setRandom([...random, newRandom]);
    setLoading(!loading);
  };

  const onItemDelete = i => {
    const newArr = random.filter((item, index) => index !== i);
    setRandom(newArr);
  };

  const {container, wrapper, greatImg} = styles;
  return (
    <View style={container}>
      <Navbar name={nameOfApp} />
      <ScrollView style={{width: '100%'}}>
        <View style={wrapper}>
          <Generate add={onAddRandom} />
          <ListItem items={random} onDelete={onItemDelete} />
          <ActivityIndicator size="large" color="red" animating={loading} />
          <Input />
          <ImageComp />
          <ModalComp />
          <PickerComp />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  wrapper: {
    flex: 1,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;
