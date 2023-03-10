import * as React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import SearchInput from '@src/component/HomeScreen/SearchInput';
import ScrollTabs from '@src/component/HomeScreen/ScrollTabs';
import ItemList from '@src/component/HomeScreen/ItemList';

import styles from './index.style';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={styles.statusBar.backgroundColor}
      />
      <View style={styles.mainPanel}>
        <SearchInput />
        <ScrollTabs />
        <ItemList />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
