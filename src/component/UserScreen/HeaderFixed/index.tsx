import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feathericons from 'react-native-vector-icons/Feather';

import styles from './index.style';

const HeaderFixed = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <Ionicons name="line-scan" color={'#1f1f1f'} size={24} />
      <Feathericons name="settings" color={'#1f1f1f'} size={24} />
    </View>
  );
};

export default HeaderFixed;
