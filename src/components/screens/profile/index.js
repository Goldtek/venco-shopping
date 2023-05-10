import React from 'react';
import {useSelector} from 'react-redux';
import {
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Email, Tel, Separator, Edit, Logout} from '../../custom';

const Profile = ({navigation}) => {
  const authReducer = useSelector(reducer => reducer.User);
  const {user} = authReducer;
  const dispatch = useDispatch();

  const onPressTel = number => {
    Linking.openURL(`tel://${number}`).catch(err => console.log('Error:', err));
  };

  const onPressSms = () => {
    console.log('sms');
  };

  const onPressEmail = email => {
    Linking.openURL(`mailto://${email}?subject=subject&body=body`).catch(err =>
      console.log('Error:', err),
    );
  };

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'});
    navigation.navigate('Login');
  };

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <ImageBackground
        style={styles.headerBackgroundImage}
        blurRadius={10}
        source={require('../../../../assets/images/bg.jpeg')}>
        <View style={styles.headerColumn}>
          <Image style={styles.userImage} source={{uri: user.avatar}} />
          <Text style={styles.userNameText}>{user.name}</Text>
          <View style={styles.userAddressRow}>
            <View style={styles.userCityRow}>
              <Text style={styles.userCityText}>
                {user?.address?.city}, {user?.address?.country}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );

  const renderTel = () => (
    <View style={styles.telContainer}>
      <Tel
        number={user.phone}
        onPressSms={onPressSms}
        onPressTel={onPressTel}
      />
    </View>
  );

  const renderEmail = () => (
    <View style={styles.emailContainer}>
      <Email email={user.email} onPressEmail={onPressEmail} />
    </View>
  );

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {renderHeader()}
        {renderTel()}
        {Separator()}
        {renderEmail()}
        {Separator()}
        <Edit navigation={navigation} />
        {Separator()}
        <Logout handleLogout={handleLogout} />
        {Separator()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  telContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
});

export default Profile;
