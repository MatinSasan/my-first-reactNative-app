import React, {useState} from 'react';
import {StyleSheet, Text, View, Picker} from 'react-native';

const PickerComp = props => {
  const [language, setLanguage] = useState('english');

  return (
    <Picker
      style={{width: '100%'}}
      selectedValue={language}
      onValueChange={(itemValue, itemIndex) => {
        setLanguage(itemValue);
      }}>
      <Picker.Item label="French" value="french" />
      <Picker.Item label="English" value="english" />
      <Picker.Item label="German" value="german" />
      <Picker.Item label="Persian" value="persian" />
    </Picker>
  );
};

export default PickerComp;
