/* eslint-disable no-nested-ternary */
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';

import Splash from './splash';

import {PublicNavigator, PrivateNavigator} from '../../lib/appNavigator';

const Root = props => {
  const [isLoading, setLoading] = useState(false);

  return (
    <NavigationContainer>
      {isLoading ? (
        <Splash />
      ) : // check if loggedIn or not
      props.User.isAuthenticated ? (
        <PrivateNavigator />
      ) : (
        <PublicNavigator />
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = ({User}) => ({
  User,
});

export default connect(mapStateToProps)(Root);
