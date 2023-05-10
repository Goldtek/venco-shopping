import {moderateScale} from 'react-native-size-matters';
import {Platform} from 'react-native';

export const ms = number => moderateScale(number);

export const toTitleCase = str => {
  if (str && str.length > 0) {
    return str.replace(
      /\w\S*/g,
      txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
    );
  }
};

export const setElevation = elevation => {
  if (Platform.Version >= 21) {
    return {elevation};
  }
  return {
    borderWidth: elevation,
  };
};


