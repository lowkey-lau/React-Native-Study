import * as React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import SearchInput from '@src/component/HomeScreen/SearchInput/SearchInput';
import ScrollTabs from '@src/component/HomeScreen/ScrollTabs/ScrollTabs';
import ItemList from '@src/component/HomeScreen/ItemList/ItemList';

import styles from './HomeScreen.style';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <SearchInput />
        <ScrollTabs />
        <ItemList />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
