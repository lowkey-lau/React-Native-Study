import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './index.style';
import mooksData from './index.mooks';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Item = ({item, onPress}: any) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <MaterialCommunityIcons
      name={item.type}
      color={'#1f1f1f'}
      size={24}
      style={styles.itemIcon}
    />
    <Text style={styles.itemLabel}>{item.label}</Text>
  </TouchableOpacity>
);

const ItemList = () => {
  const [selectedId, setSelectedId] = useState<number>();

  const RenderItem = ({item}: any) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <View style={styles.container}>
      {mooksData.map((item, index) => {
        return (
          <RenderItem
            item={item}
            key={index}
            onPress={() => setSelectedId(item.id)}></RenderItem>
        );
      })}
    </View>
  );
};

export default ItemList;
