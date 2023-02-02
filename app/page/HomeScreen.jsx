import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import SearchInput from '../components/HomeScreen/SearchInput';
import ScrollTabs from '../components/HomeScreen/ScrollTabs';

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#e34e48',
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View>
        <SearchInput />
        <ScrollTabs />
        {/* <Button
          title="Go to UserScreen"
          onPress={() => navigation.navigate('User')}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
