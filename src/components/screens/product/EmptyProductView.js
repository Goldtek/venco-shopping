import React from 'react';
import {Text, View, Image} from 'react-native';
import {Colors} from '../../custom';

const productNotFound = require('../../../assets/images/order/order_not_found.png');

export default () => (
  <View
    style={{
      height: 80,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 180,
    }}>
    <Image source={productNotFound} />
    <Text
      style={{
        marginTop: 30,
        color: Colors.placeholderTextColor,
        fontSize: 16,
      }}>
      No product found.
    </Text>
  </View>
);
