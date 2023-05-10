import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-ui-lib';
import {Colors} from './Colors';

export const GText = ({children, style, black, purple, ...props}) => {
  return (
    <Text
      style={[
        styles.text,
        black && styles.blackText,
        purple && styles.purpleText,
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const RegularText = ({text, style, color, size, ...props}) => {
  return (
    <Text
      style={[styles.regular, style, size && {fontSize: size}]}
      color={color || Colors.black}
      {...props}>
      {text}
    </Text>
  );
};

export const BoldText = ({text, style, color, size, ...props}) => {
  return (
    <Text
      style={[styles.bold, style, size && {fontSize: size}]}
      color={color || Colors.black}
      {...props}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.text,
  },
  blackText: {
    color: Colors.black,
  },
  purpleText: {
    color: Colors.purple,
  },
  regular: {
    // fontFamily: 'BRFirma-Regular', //uncomment when detox unrecoignize issue is fixed.
    fontSize: 16,
    lineHeight: 18,
  },
  medium: {
    fontFamily: 'BRFirma-Medium',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
  },
  bold: {
  //   fontFamily: 'BRFirma-Bold',
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
  },
});
