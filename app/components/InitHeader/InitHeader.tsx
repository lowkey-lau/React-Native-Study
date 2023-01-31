import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const InitHeader = () => {
  const [value, onChangeText] = React.useState('dsadasdsdadas');

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}></TextInput>
      <Text style={styles.textBtn}>发布</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textBtn: {
    color: 'red',
  },
});

export default InitHeader;
