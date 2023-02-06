import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './index.style';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PublishRecord = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.desc}>再小的想法，也值得被记录</Text>
      <TouchableOpacity style={styles.btnView}>
        <MaterialIcons name="add" color={'#1f1f1f'} size={24} />
        <Text style={styles.btnText}>发布</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PublishRecord;
