import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Colors} from './Colors';

export default () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    }}>
    <ActivityIndicator animating size={40} color={Colors.brand} />
  </View>
);
