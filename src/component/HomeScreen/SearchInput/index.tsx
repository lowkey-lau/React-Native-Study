import React from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';

import styles from './index.style';

const InitHeader = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputView}>
        <FeatherIcons
          name="search"
          color={'#171717'}
          size={16}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder="这里输入搜索内容"
          placeholderTextColor={'#1d1d1d'}
        />
      </View>

      <TouchableOpacity style={styles.publishView}>
        <IonIcons
          name="add-circle"
          color={'#FFF'}
          size={24}
          style={styles.publishIcon}
        />
        <Text style={styles.textBtn}>发布</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InitHeader;
