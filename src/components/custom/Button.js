import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors} from './Colors';

export const Button = ({
  title,
  bgColor,
  color,
  outline,
  textOnly,
  isLabel,
  disabled,
  style,
  onPress,
  testID,
  labelStyle,
  buttonStyle,
  Icon,
  ...props
}) => {
  const handlePress = () => {
    if (disabled) {
      return;
    }
    onPress();
  };

  const computeStyles = () => {
    if (isLabel) {
      return {
        button: [
          styles.button,
          styles.isLabel,
          style,
          disabled && styles.disabled,
        ],
        label: styles.outlineLabel,
      };
    }

    if (textOnly) {
      return {
        button: [
          styles.button,
          styles.textOnly,
          style,
          disabled && styles.disabled,
        ],
        label: styles.outlineLabel,
      };
    }

    if (outline) {
      return {
        button: [
          styles.button,
          styles.outline,
          style,
          disabled && styles.disabled,
        ],
        label: styles.outlineLabel,
      };
    }

    return {
      button: [
        styles.button,
        style,
        bgColor ? {backgroundColor: bgColor} : null,
        disabled ? styles.disabled : null,
      ],
      label: [styles.labelStyle, color ? {color} : undefined],
    };
  };

  const buttonStyles = computeStyles();

  return (
    <TouchableOpacity
      style={[buttonStyles.button, buttonStyle]}
      onPress={handlePress}
      activeOpacity={disabled ? 1 : 0.7}
      testID={testID}
      {...props}>
      <View style={styles.row}>
        {Icon ? <Icon style={styles.icon} /> : null}
        <Text style={[buttonStyles.label, labelStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    height: 48,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outline: {
    backgroundColor: Colors.transparent,
    borderWidth: 0.5,
    borderColor: Colors.blue,
  },
  isLabel: {
    borderRadius: 24,

    backgroundColor: Colors.white,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    shadowColor: 'rgba(44, 36, 8)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 16,

    elevation: 5,
  },
  textOnly: {
    backgroundColor: Colors.transparent,
  },
  disabled: {
    opacity: 0.3,
  },
  labelStyle: {
    fontSize: 16,
    lineHeight: 21,
    color: Colors.white,
  },
  outlineLabel: {
    fontSize: 16,
    lineHeight: 21,
    color: Colors.blue,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    width: 15,
    height: 12,
    marginRight: 12,
  },
});
