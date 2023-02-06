import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    position: 'absolute',
    width: '100%',
    zIndex: 10,
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

export default styles;
