import React from 'react';
import {ActivityIndicator, Platform, View, StyleSheet} from 'react-native';
import {Colors} from './Colors';

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 99,
  },
  overlayBlur: {
    flex: 1,
  },
  spinner: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        backgroundColor: Colors.darkWhite,
      },
      ios: {},
    }),
  },
  blurBackdrop: {
    ...StyleSheet.absoluteFillObject,
  },
});
const Loader = ({blurType, size, color}) => {
  let blur = null;
  return (
    <View style={styles.overlay}>
      {blur}
      <View style={styles.spinner}>
        <ActivityIndicator size={size} animating color={color} />
      </View>
    </View>
  );
};

export default Loader;
