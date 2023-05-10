import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../components/custom';
import Login from '../components/screens/login';
import SignUp from '../components/screens/signup';
import Cart from '../components/screens/product/cart';
import Profile from '../components/screens/profile';
import AllProducts from '../components/screens/product';
import EditProfile from '../components/screens/editProfile';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const PrivateTabNavigator = () => (
  <BottomTab.Navigator
    initialRouteName="Profile"
    presentation="modal"
    activeColor={Colors.seconary}
    inactiveColor={Colors.yIcon}
    shifting={false}
    labeled={true}>
    <BottomTab.Screen
      component={AllProducts}
      name="Products"
      options={{
        tile: 'Products',
        tabBarIcon: () => <Icon name="cart-outline" size={24} />,
      }}
    />
    <BottomTab.Screen
      component={Cart}
      name="Cart"
      options={{
        headerTitle: 'Cart',
        tabBarIcon: () => <Icon name="cart-plus" size={24} />,
      }}
    />
    <BottomTab.Screen
      component={Profile}
      name="Profile"
      options={{
        headerShown: false,
        tabBarIcon: () => <Icon name="account-outline" size={24} />,
      }}
    />
  </BottomTab.Navigator>
);

//loggedin
export const PrivateNavigator = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen
      name="Dashboard"
      component={PrivateTabNavigator}
      options={() => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="Profile"
      component={Profile}
      options={() => ({
        headerTitle: '',
        headerShown: false,
      })}
    />
  </Stack.Navigator>
);

export const PublicNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerTitle: '',
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="Signup"
      component={SignUp}
      options={{
        headerShown: false,
      }}
    />


    <Stack.Screen
      name="EditProfile"
      component={EditProfile}
      options={() => ({
        headerTitle: 'Edit Profile',
      })}
    />

    <Stack.Screen
      name="Dashboard"
      component={PrivateTabNavigator}
      options={() => ({
        headerTitle: '',
        headerShown: false,
      })}
    />
  </Stack.Navigator>
);
