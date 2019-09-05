import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

const Input = props => {
  const [myInput, setInput] = useState('');
  const [things, setThings] = useState(['JS', 'Python']);
  const {input, wrapper, styleThings} = styles;

  const onChangeInput = val => {
    setInput(val);
  };

  const onAddThings = () => {
    setThings([...things, myInput]);
    setInput('');
  };

  return (
    <View style={wrapper}>
      <TextInput
        placeholder="Write something :D"
        value={myInput}
        style={input}
        onChangeText={onChangeInput}
      />
      <Button title="Add it" onPress={onAddThings} />
      {things.map(thing => (
        <Text style={styleThings} key={thing}>
          {thing}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    marginTop: 20,
    fontSize: 20,
    padding: 10,
  },
  wrapper: {
    width: '100%',
  },
  styleThings: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: '#cecece',
    padding: 10,
    marginBottom: 20,
  },
});

export default Input;
