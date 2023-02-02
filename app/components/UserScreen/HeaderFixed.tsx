import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const HeaderFixed = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.wrapper}>
      <Text style={styles.textBtn}>发布</Text>
      <Text style={styles.textBtn}>发布</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 15,
    zIndex: -1,
  },
  textBtn: {
    color: '#FFF',
    fontSize: 12,
  },
});

export default HeaderFixed;
