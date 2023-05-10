import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {Colors} from './Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 30,
    paddingTop: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    color: Colors.secondaryDarkText,
    // fontFamily: Fonts.fontFamily.medium,
    fontWeight: 'normal',
    fontSize: 16,
  },
  image: {
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    marginBottom: 35,
  //  fontFamily: Fonts.fontFamily.regular,
  },
});

export default ({image, title, style, text, children}) => {
  const imageEl = image && <Image style={styles.image} source={image} />;
  const titleEl = title && <Text style={styles.title}>{title}</Text>;

  return (
    <View style={[styles.container, style]}>
      {imageEl}
      {titleEl}
      <Text style={styles.text}>{text}</Text>
      {children}
    </View>
  );
};
