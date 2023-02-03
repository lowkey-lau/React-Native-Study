import React, {useState} from 'react';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './index.style';
import mooksData from './index.mooks';

const Item = ({item, onPress}: any) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={styles.itemHeader}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
    <View style={styles.itemImageContainer}>
      <Image
        style={styles.itemImage}
        source={require('@src/assets/images/test.jpg')}
      />
    </View>
  </TouchableOpacity>
);

const ItemList = () => {
  const [selectedId, setSelectedId] = useState<number>();

  const renderItem = ({item}: any) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <FlatList
      data={mooksData}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      extraData={selectedId}
      style={styles.container}
    />
  );
};

export default ItemList;
