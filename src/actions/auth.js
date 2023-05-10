import axios from 'axios';
import {Alert} from 'react-native';
import {LOGIN_SUCCESS, FETCH_USER, UPDATE_USER} from './action-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import {store} from '../../store';

const HandleLogin = (data, navigation) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3000/login', {
      data,
    });
    dispatch({type: LOGIN_SUCCESS, payload: response.data});
    fetchUser();
    navigation.navigate('Dashboard');
  } catch (error) {
    dispatch({type: 'HANDLE_ERROR', payload: error});
  }
};

const fetchUser = () => async dispatch => {
  const {token} = store.getState().User;
  try {
    const {data} = await axios.get('http://localhost:3000/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({type: FETCH_USER, payload: data});
  } catch (error) {
    console.log('ttt', error);
  }
};

const EditUser = data => async dispatch => {
  const {token} = store.getState().User;
  dispatch({type: UPDATE_USER, payload: data});
  try {
    await axios.put(
      'https://update/me',
      {
        data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    Alert.alert('Success', 'Your changes have been saved.');
  } catch (error) {
    saveUserLocally(data);
    Alert.alert('Error', 'Your changes not be saved. Please try again later');
  }
};

export const saveUserLocally = async user => {
  await AsyncStorage.setItem('user', JSON.stringify(user));
};

export const syncUserWithApi = async () => {
  const userJson = await AsyncStorage.getItem('user');
  if (!userJson) {
    return;
  }
  const user = JSON.parse(userJson);
  await saveUserLocally(user.id);
};

export const syncUserWithApiWhenOnline = async () => {
  const {isConnected} = await NetInfo.fetch();
  if (isConnected) {
    await syncUserWithApi();
  }
};

const initUserSyncWithApi = () => {
  NetInfo.addEventListener(syncUserWithApiWhenOnline);
};

export {HandleLogin, fetchUser, EditUser, initUserSyncWithApi};
