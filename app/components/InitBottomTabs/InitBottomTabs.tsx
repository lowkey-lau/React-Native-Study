import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const InitBottomTabs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}>sdasd</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default InitBottomTabs;
