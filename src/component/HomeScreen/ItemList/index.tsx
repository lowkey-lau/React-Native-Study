import React, {useState} from 'react';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './index.style';
import mooksData from './index.mooks';

const Item = ({item, onPress}: any) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={styles.itemHeader}>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
    <View style={styles.itemImageContainer}>
      <Image
        style={styles.itemImage}
        source={require('@src/assets/images/test.jpg')}
      />
      <Image
        style={styles.itemImage}
        source={require('@src/assets/images/test.jpg')}
      />
      <Image
        style={styles.itemImage}
        source={require('@src/assets/images/test.jpg')}
      />
    </View>

    <View style={styles.itemFooter}>
      <Text style={styles.itemType}>{item.type}</Text>
      <Text style={styles.itemTum}>{item.num}评论</Text>
      <Text style={styles.itemTime}>{item.time}</Text>
    </View>
  </TouchableOpacity>
);

const ItemList = () => {
  const [selectedId, setSelectedId] = useState<number>();

  const renderItem = ({item}: any) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };
  const renderItemLine = ({item}: any) => {
    return <View style={styles.itemLine} />;
  };

  return (
    <FlatList
      data={mooksData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
      ItemSeparatorComponent={renderItemLine}
      style={styles.container}
    />
  );
};

export default ItemList;
