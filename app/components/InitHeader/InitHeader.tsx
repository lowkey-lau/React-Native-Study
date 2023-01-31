import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const InitHeader = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder="这里输入搜索内容"
        placeholderTextColor={styles.fontColor}></TextInput>
      <Text style={styles.textBtn}>发布</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e34e48',
    height: 50,
    paddingHorizontal: 15,
    zIndex: -1,
  },
  input: {
    flex: 1,
    color: '#1d1d1d',
    fontWeight: '400',
    fontSize: 16,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 40,
    paddingHorizontal: 15,
    height: 40,
  },
  textBtn: {
    color: '#FFF',
    fontSize: 12,
  },
  fontColor: '#1d1d1d',
});

export default InitHeader;
