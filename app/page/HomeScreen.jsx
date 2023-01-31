import * as React from 'react';
import {View, Button} from 'react-native';
import HomeSearchInput from '../components/HomeSearchInput';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <HomeSearchInput />
      <Button
        title="Go to UserScreen"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  );
};

export default HomeScreen;
