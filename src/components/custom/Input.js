import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
import {ms} from './utils';
import {Colors} from './Colors';

import {ClosedPasswordEyeSvg, PasswordEyeSvg} from '../../assets/icons';

export const Input = ({
  value,
  onChange,
  label,
  placeholder,
  keyboardType = 'default',
  style,
  props,
  disabled,
  hasError,
  rightIcon,
  testID,
  isPassword,
}) => {
  const [showPassword, setShowPassword] = useState(isPassword);
  return (
    <View style={styles.inputWrapper}>
      <Text p1 black marginB-10>
        {label}
      </Text>

      <>
        <TextInput
          editable={!disabled}
          {...props}
          placeholder={placeholder}
          placeholderTextColor={Colors.paleSky}
          keyboardType={keyboardType}
          secureTextEntry={showPassword}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          style={[
            styles.input,
            disabled && styles.disableInput,
            hasError && styles.errorInput,
            style,
          ]}
          value={value}
          onChangeText={onChange}
        />
        {/* {isPassword && (
          <>
            {showPassword ? (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setShowPassword(false)}
                style={styles.rightIcon}>
                <ClosedPasswordEyeSvg />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setShowPassword(true)}
                style={styles.rightIcon}>
                <PasswordEyeSvg />
              </TouchableOpacity>
            )}
          </>
        )} */}

        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </>

      {hasError && (
        <Text p1 red marginT-6>
          Error occured
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  selectScroll: {
    paddingTop: ms(20),
  },
  listItem: {
    paddingVertical: ms(10),
  },
  chevronDown: {
    position: 'absolute',
    right: ms(16),
  },
  inputWrapper: {
    // marginBottom: ms(16),
  },
  textarea: {
    borderRadius: ms(8),
    borderColor: '#E2E4E8',
    borderWidth: 1,
    paddingHorizontal: ms(16),
    paddingTop: ms(14),
    height: ms(98),
    backgroundColor: '#fff',
  },
  input: {
    borderColor: '#E2E4E8',
    borderWidth: 1,
    borderRadius: ms(8),
    height: ms(48),
    paddingLeft: ms(16),
    backgroundColor: '#fff',
  },
  rightIcon: {
    position: 'absolute',
    right: 16,
    bottom: 16.5,
  },
  disableInput: {
    backgroundColor: '#EEEFF2',
    borderColor: '#E2E4E8',
    borderWidth: 1,
  },
  errorInput: {
    borderColor: 'red',
  },
  amountInput: {
    width: '60%',
    height: ms(28),
    color: Colors.black,

    fontSize: 14,
    lineHeight: ms(21),
  },
  select: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  countryScroll: {
    // backgroundColor: 'pink',
    paddingVertical: ms(30),
  },
  selectBtn: {
    height: ms(48),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#E2E4E8',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: ms(8),
    paddingHorizontal: ms(16),
  },
  sheet: {
    paddingTop: ms(11),
    paddingHorizontal: ms(24),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: ms(24),
  },
  dash: {
    width: ms(48),
    height: ms(5),
    borderRadius: ms(8),
    backgroundColor: '#D4D8DC',
    alignSelf: 'center',
    marginBottom: ms(24),
  },
  closeBtn: {
    // backgroundColor: 'pink',
    paddingVertical: ms(10),
    paddingHorizontal: ms(10),
    position: 'absolute',
    left: 10,
  },
  search: {
    borderColor: '#E2E4E8',
    borderWidth: 1,
    borderRadius: ms(6),
    height: ms(40),
    paddingLeft: ms(14),
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    // backgroundColor: 'pink',
    height: '100%',
    paddingLeft: ms(14),
    width: '100%',
  },
  flag: {
    width: ms(24),
    height: ms(24),
    borderRadius: ms(12),
    backgroundColor: 'red',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
