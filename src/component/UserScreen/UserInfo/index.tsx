import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './index.style';

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <LinearGradient colors={['#ee7944', '#ea4d60']} style={styles.loginBtn}>
          <Text style={styles.loginText}>登录</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default UserInfo;
