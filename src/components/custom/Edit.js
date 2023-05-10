import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
    paddingTop: 25,
    paddingLeft: 24,
  },
  emailColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
    alignItems: 'center',
  },
  emailIcon: {
    color: 'gray',
    fontSize: 30,
  },
  emailNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  emailNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  emailRow: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emailText: {
    fontSize: 16,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
});

const Edit = ({navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
    <View style={[styles.container]}>
      <View style={styles.iconRow}>
        <Icon
          name="pencil"
          underlayColor="transparent"
          size={30}
          onPress={() => navigation.navigate('')}
        />
      </View>
      <View style={styles.emailRow}>
        <View style={styles.emailColumn}>
          <Text style={styles.emailText}>Edit Profile</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default Edit;
