import React, {useState} from 'react';
import {TouchableOpacity, Text, ScrollView, View} from 'react-native';

import styles from './index.style';
import mooksData from './index.mooks';

const Item = ({item, onPress, style}: any) => (
  <TouchableOpacity onPress={onPress} style={styles.tabsItem}>
    <Text style={[styles.tabsFont, style]}>{item.label}</Text>
  </TouchableOpacity>
);

const ScrollTabs = () => {
  const [selectedId, setSelectedId] = useState(0);

  const RenderItem = ({item}: any) => {
    const color = item.id === selectedId ? '#e34e48' : '#000';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{color}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollViewStyle}
        contentInsetAdjustmentBehavior="automatic"
        horizontal>
        {mooksData.map((item, index) => {
          return <RenderItem item={item} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default ScrollTabs;
