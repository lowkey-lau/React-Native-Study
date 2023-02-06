import * as React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import HeaderFixed from '@src/component/UserScreen/HeaderFixed';
import UserInfo from '@src/component/UserScreen/UserInfo';
import IconLink from '@src/component/UserScreen/IconLink';
// import PublishRecord from '@src/component/UserScreen/PublishRecord';

import styles from './index.style';

const UserScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f2f2f2'} />
      <View>
        <HeaderFixed />
        <UserInfo />
        <IconLink />
        {/* <PublishRecord /> */}
      </View>
    </SafeAreaView>
  );
};

export default UserScreen;
