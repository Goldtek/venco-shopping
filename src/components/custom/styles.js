import {StyleSheet, Platform} from 'react-native';
import {Colors} from './Colors';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'android' ? 30 : 65,
    alignItems: 'center',
  },
  rightComponent: {
    marginBottom: 10,
    minWidth: 25,
  },
  backArrow: {
    marginLeft: 0,
    paddingVertical: 8,
    alignSelf: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: Colors.black,
    letterSpacing: -0.2,
  },
  sectionHeader: {
    backgroundColor: Colors.titanWhite,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  sectionTitle: {
    // fontFamily: 'Dam',
    color: 'rgba(0,0,0,0.3)',
    fontSize: 13,
  },
});
