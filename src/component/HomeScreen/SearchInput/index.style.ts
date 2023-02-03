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
  input: {
    flex: 1,
    color: '#1d1d1d',
    fontWeight: '400',
    fontSize: 14,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 40,
    paddingHorizontal: 15,
    height: 40,
  },
  textBtn: {
    color: '#FFF',
    fontSize: 12,
  },
});

export default styles;
