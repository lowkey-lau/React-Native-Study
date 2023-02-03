import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 1,
    title: '放假通知！！！连休五天21421421',
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

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={styles.itemHeader}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
    <View style={styles.itemImageContainer}>
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
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  itemHeader: {},
  title: {
    fontSize: 16,
  },
  itemImageContainer: {},
  itemImage: {
    flex: 1,
    width: 100,
    height: 60,
  },
});

export default ItemList;
