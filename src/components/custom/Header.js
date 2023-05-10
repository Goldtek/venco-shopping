import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {View as UIView, Text} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BackArrow, Close, BackButton} from '../../assets/icons';
import {GText} from './Text';
import {ms} from './utils';
import {Colors} from './Colors';

export const Header = ({
  leftClick,
  back,
  leftStyle,
  leftComponent,
  title,
  rightComponent,
  headerStyle,
  titleStyle,
  isSendGift,
}) => {
  return (
    <>
      <View style={[styles.header, headerStyle]}>
        <TouchableOpacity onPress={leftClick}>
          {!back ? (
            <View style={leftStyle}>{leftComponent}</View>
          ) : (
            <View style={styles.backArrow}>
              {isSendGift ? <BackButton /> : <BackArrow />}
            </View>
          )}
        </TouchableOpacity>

        <View>
          <GText style={[styles.title, titleStyle]}>{title}</GText>
        </View>
        <View style={styles.rightComponent}>
          <View>{rightComponent}</View>
        </View>
      </View>
    </>
  );
};

// IsHeader
export const LiteHeader = ({title, canClose}) => {
  const navigation = useNavigation();

  return (
    <UIView
      row
      centerH
      spread
      paddingB-24
      paddingT-40
      // paddingH-24
      backgroundColor={Colors.white}>
      <Text h2 black>
        {title}
      </Text>
      {canClose && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Close />
        </TouchableOpacity>
      )}
    </UIView>
  );
};

export const BackHeader = ({title, stack, closeIcon, backAction}) => {
  const navigation = useNavigation();
  return (
    <>
      {stack ? (
        <View>
          <UIView row>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.stackBtn}
              onPress={backAction ? backAction : () => navigation.goBack()}>
              {closeIcon ? (
                // <Icon name="close" size={24} color="#110E14" />
                <BackArrow />
              ) : (
                <BackArrow />
              )}
            </TouchableOpacity>
          </UIView>
          <Text h2 black marginB-24>
            {title}
          </Text>
        </View>
      ) : (
        <UIView row center>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.backBtn}
            onPress={backAction ? backAction : () => navigation.goBack()}>
            {closeIcon ? (
              <Icon name="close" size={24} color="#110E14" />
            ) : (
              <BackArrow />
            )}
          </TouchableOpacity>
          <Text h4 black>
            {title}
          </Text>
        </UIView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    paddingHorizontal: ms(10),
    paddingVertical: ms(10),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
  },
  stackBtn: {
    paddingHorizontal: ms(10),
    paddingVertical: ms(10),
    marginBottom: ms(18),
    marginLeft: -14,
  },
});
