import React, {useState} from 'react';
import {Image, StatusBar} from 'react-native';
import {View, Colors} from 'react-native-ui-lib';
import {useDispatch} from 'react-redux';
import {BoldText, Button, GText, Input, RegularText} from '../../custom';
import {styles} from './styles';
import {HandleLogin} from '../../../actions/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSignIn = () => {
    const data = {
      email,
      password,
    };
    dispatch(HandleLogin(data, navigation));
    navigation.navigate('Dashboard');
  };

  return (
    <>
      <StatusBar barStyle="default" />
      <View flex paddingH-24 centerV backgroundColor={Colors.titanWhite}>
        <View centerH>
          <Image
            source={require('../../../assets/images/logo.png')}
            resizeMode="cover"
            style={styles.logo}
          />
          <BoldText
            text="Hello, welcome back"
            color={Colors.purple}
            marginB-24
          />
          <RegularText text="We have missed you" marginB-40 color="#6C757D" />
        </View>
        <View marginB-24 testID="email">
          <Input
            label="Email Address"
            placeholder="Enter your email address"
            value={email}
            keyboardType="email-address"
            onChange={setEmail}
          />
        </View>
        <View testID="password" marginB-20>
          <Input
            label="Password"
            placeholder="Enter your password"
            isPassword
            value={password}
            onChange={setPassword}
          />
        </View>

        <Button
          title="Forgot Password?"
          textOnly
          buttonStyle={styles.forgotPass}
          labelStyle={styles.forgotPassLabel}
          onPress={() => console.log('')}
        />
        <Button
          testID="loginBtn"
          title="Sign In"
          disabled={!email || !password}
          onPress={handleSignIn}
        />

        <View row centerV centerH marginT-32>
          <GText body1 black>
            Don't have an account?{' '}
          </GText>
          <Button
            title="Sign Up"
            textOnly
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </View>
    </>
  );
};

export default Login;
