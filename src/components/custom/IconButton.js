import React from 'react';
import {TouchableOpacity} from 'react-native';

const IconButton = ({style, icon, onPress, disabled}) => (
  <TouchableOpacity disabled={disabled} style={style} onPress={onPress}>
    {icon}
  </TouchableOpacity>
);

export default IconButton;
