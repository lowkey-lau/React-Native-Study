import React from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './index.style';

const InitHeader = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder="这里输入搜索内容"
        placeholderTextColor={'#1d1d1d'}></TextInput>
      <Text style={styles.textBtn}>发布</Text>
    </View>
  );
};

export default InitHeader;
