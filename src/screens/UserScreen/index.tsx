import * as React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import HeaderFixed from '@src/component/UserScreen/HeaderFixed';

import styles from './index.style';

const UserScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f2f2f2'} />
      <View>
        <HeaderFixed />
      </View>
    </SafeAreaView>
  );
};

export default UserScreen;
