import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 15,
    zIndex: -1,
    backgroundColor: '#e34e48',
  },
  inputView: {
    backgroundColor: '#fff',
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 15,
  },
  searchIcon: {
    marginRight: 4,
  },
  input: {
    color: '#1d1d1d',
    fontWeight: '400',
    fontSize: 14,
    height: 40,
  },
  publishView: {
    flexDirection: 'column',
  },
  publishIcon: {},
  textBtn: {
    color: '#FFF',
    fontSize: 10,
  },
});

export default styles;
