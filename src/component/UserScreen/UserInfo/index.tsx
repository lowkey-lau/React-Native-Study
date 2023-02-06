import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './index.style';

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.loginBtn}>登录</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserInfo;
