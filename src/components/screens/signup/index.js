import React, {useState} from 'react';
import {View} from 'react-native-ui-lib';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, GText, Input} from '../../custom';
import styles from './styles';

const SignUp = ({navigation}) => {
  const [fullname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleBlur = () => {};

  const handleLogin = () => {
    navigation.navigate('verify_email', {email});
  };

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.paddedScroll}>
      <GText h1 blue bold marginB-10>
        Register Account
      </GText>
      <GText body2 marginB-24>
        Let’s get you started! This will only take a few minutes.
      </GText>

      <View marginB-20>
        <Input
          label="Fullname"
          placeholder="Enter your FullName"
          value={fullname}
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

      <View marginB-20 row centerV>
        <Input
          label="Code"
          value="+234"
          onChange={() => {}}
          disabled
          style={styles.countryCode}
        />
        <Input
          label="Phone Number"
          placeholder="Enter your phone number"
          value={phone}
          onBlur={handleBlur}
          keyboardType="number-pad"
          onChange={setPhone}
          style={styles.phone}
        />
      </View>

      <View marginB-20 testID="password">
        <Input
          label="Password"
          placeholder="Enter your password"
          value={password}
          onBlur={handleBlur}
          isPassword
          onChange={setPassword}
        />
      </View>
      <View marginB-30>
        <Button title="Sign Up" disabled={!email} onPress={handleLogin} />
      </View>
      <View row centerV centerH marginT-10>
        <GText body1 black>
          Already have an account?{' '}
        </GText>
        <Button
          title="Click here"
          textOnly
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
