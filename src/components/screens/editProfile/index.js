import React, {useState, useEffect} from 'react';
import {View} from 'react-native-ui-lib';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, Input} from '../../custom';
import styles from './styles';
import {EditUser, initUserSyncWithApi} from '../../../actions/auth';

const EditProfile = ({navigation}) => {
  const authReducer = useSelector(state => state.User);
  const {user} = authReducer;
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [city, setCity] = useState(user.address.city);
  const [country, setCountry] = useState(user.address.country);
  const dispatch = useDispatch();

  const handleUPdate = () => {
    const data = {
      name,
      email,
      phone,
      address: {...user.address, city, country},
    };
    dispatch(EditUser(data));
    navigation.goBack();
  };

  useEffect(() => {
    initUserSyncWithApi();
  }, []);

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.paddedScroll}>
      <View marginB-20>
        <Input
          label="Fullname"
          placeholder="Enter your FullName"
          value={name}
          onChange={setName}
        />
      </View>

      <View marginB-20 testID="email">
        <Input
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          keyboardType="email-address"
          onChange={setEmail}
        />
      </View>

      <View marginB-20>
        <Input
          label="Phone Number"
          placeholder="Enter your phone number"
          value={phone}
          keyboardType="number-pad"
          onChange={setPhone}
        />
      </View>

      <View marginB-20 testID="city">
        <Input
          label="City"
          placeholder="Enter your City"
          value={city}
          onChange={setCity}
        />
      </View>
      <View marginB-20 testID="country">
        <Input
          label="Country"
          placeholder="Enter your Country"
          value={country}
          onChange={setCountry}
        />
      </View>
      <View marginB-30>
        <Button title="Update Profile" onPress={handleUPdate} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default EditProfile;
