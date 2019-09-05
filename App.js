/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Navbar from './src/components/Nav/Navbar';
import Generate from './src/components/Generator/Generator';
import ListItem from './src/components/Generator/ListItem';
import Input from './src/components/Input/Input';

const App = () => {
  const [nameOfApp, setNameApp] = useState('My Awesome app');
  const [random, setRandom] = useState([20, 13]);

  const onAddRandom = () => {
    const newRandom = Math.floor(Math.random() * 100) + 1;
    setRandom([...random, newRandom]);
  };

  const onItemDelete = i => {
    const newArr = random.filter((item, index) => index !== i);
    setRandom(newArr);
  };

  const {container} = styles;
  return (
    <View style={container}>
      <Navbar name={nameOfApp} />
      <Generate add={onAddRandom} />
      <ListItem items={random} onDelete={onItemDelete} />
      <Input />
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
});

export default App;
