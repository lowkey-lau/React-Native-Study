import React, {useState} from 'react';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './index.style';

interface IDATA {
  id: number;
  title?: string;
}

const DATA: IDATA[] = [
  {
    id: 1,
    title: '放假通知！！！连休五天123213',
  },
  {
    id: 2,
    title: '如何在头条上月收入一万？',
  },
  {
    id: 3,
    title: '近视的人该怎么保护眼睛稳定视力，不让度数增高？',
  },
  {
    id: 4,
    title: '为什么有人不认可「智商低于110就别想着上985/211」的残酷现实？',
  },
];

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

      <Image
        style={styles.itemImage}
        source={{
          uri: 'https://picx.zhimg.com/50/v2-342dff69b18314e53a101757796eac2c_200x0.jpg?source=b6762063',
        }}
      />
      <Image
        style={styles.itemImage}
        source={{
          uri: 'https://picx.zhimg.com/50/v2-342dff69b18314e53a101757796eac2c_200x0.jpg?source=b6762063',
        }}
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
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
      style={styles.container}
    />
  );
};

export default ItemList;
