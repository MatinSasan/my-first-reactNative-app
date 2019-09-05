import React, {useState} from 'react';
import {View, Modal, Text, Button} from 'react-native';

const ModalComp = props => {
  const [modal, setModal] = useState(false);

  const handleModal = () => setModal(!modal);

  return (
    <View style={{width: '100%'}}>
      <Button title="Open Modal" onPress={handleModal} />
      <Modal visible={modal} animationType={'slide'}>
        <View>
          <Text style={{margin: 30, textAlign: 'center', fontSize: 30}}>
            Hey there {':)'}
          </Text>
        </View>
        <Button title="Close Modal" onPress={handleModal} />
      </Modal>
    </View>
  );
};

export default ModalComp;
