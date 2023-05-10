import {StyleSheet} from 'react-native';
import {ms, Colors} from '../../custom';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: ms(70),
    paddingHorizontal: ms(24),
    backgroundColor: Colors.titanWhite,
  },
  paddedScroll: {
    paddingBottom: ms(100),
  },
  logo: {
    width: ms(172),
    height: ms(48),
    marginBottom: ms(29),
  },
  forgotPass: {
    alignSelf: 'flex-end',
    marginBottom: ms(24),
  },
  forgotPassLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  countryCode: {
    backgroundColor: Colors.white,
    paddingHorizontal: ms(16),
    marginRight: ms(8),
  },
  phone: {
    width: ms(252),
  },
  codeText: {color: '#1B1B1B'},
  intro: {color: '#6C757D'},
});
