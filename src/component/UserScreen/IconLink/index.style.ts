import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 4,
  },
  item: {
    justifyContent: 'center',
    width: '25%',
    paddingVertical: 15,
    alignItems: 'center',
  },
  itemIcon: {
    marginBottom: 4,
  },
  itemLabel: {
    fontSize: 12,
  },
});

export default styles;
