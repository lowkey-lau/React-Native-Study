import React from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';

const InitHeader = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollViewStyle}
        contentInsetAdjustmentBehavior="automatic"
        horizontal>
        {new Array(8).fill('发布').map((item, index) => {
          return (
            <Text style={styles.itemStyle} key={index}>
              {item}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
    width: '100%',
  },
  scrollViewStyle: {
    flexDirection: 'row',
  },
  itemStyle: {
    color: '#000',
  },
  textBtn: {
    color: '#FFF',
    fontSize: 12,
  },
});

export default InitHeader;
