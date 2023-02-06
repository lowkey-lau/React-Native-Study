import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginBottom: 180,
    backgroundColor: '#fff',
    // backgroundColor: '#aaa',
  },
  item: {
    maxWidth: '100%',
    paddingVertical: 15,
    borderBottomColor: '#f1f1f1',
  },
  itemHeader: {
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemImageContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  itemImage: {
    flex: 1,
    marginRight: 4,
  },
  itemLine: {
    backgroundColor: '#f1f1f1',
    height: 1,
  },

  itemFooter: {
    flexDirection: 'row',
  },

  itemType: {
    color: '#a7a7a7',
    fontSize: 12,
    marginRight: 8,
  },
  itemTum: {
    color: '#a7a7a7',
    fontSize: 12,
    marginRight: 8,
  },
  itemTime: {
    color: '#a7a7a7',
    fontSize: 12,
  },
});

export default styles;
