import axios from 'axios';
import {Alert} from 'react-native';
import {PRODUCT_VIEW_TYPE_TOGGLE, UPDATE_ITEMS} from './action-types';
import {store} from '../../store';

export const toggleProductViewType = productViewType => ({
  type: PRODUCT_VIEW_TYPE_TOGGLE,
  productViewType,
});

const IncreaseItem = item => dispatch => {
  const {items} = store.getState().Cart;
  const newItem = item;
  newItem.quantity += 1;
  const objectToReplace = items.find(arrayItem => arrayItem.id === newItem.id);
  Object.assign(objectToReplace, newItem);
  dispatch({type: UPDATE_ITEMS, items});
};

const DecreaseItem = item => dispatch => {
  const {items} = store.getState().Cart;
  const newItem = item;
  if (Number(newItem.quantity) > 1) {
    newItem.quantity -= 1;
    const objectToReplace = items.find(
      arrayItem => arrayItem.id === newItem.id,
    );
    Object.assign(objectToReplace, newItem);
    dispatch({type: UPDATE_ITEMS, items});
  }
};

export const removeItem = (items, item) => async dispatch => {
  // since there is no aapi for this i had to comment out the api call so that it does prevent the update of the redux store
  // await axios
  //   .delete(`/shopping/items/${item.id}`)
  //   .then(() => {
  dispatch({
    type: UPDATE_ITEMS,
    items,
  });
  // })
  // .catch(error => {
  //   Alert.alert('Error', error);
  // });
};

const DeleteItem = item => dispatch => {
  const {items} = store.getState().Cart;
  Alert.alert(
    'Delete Item',
    `Do you want to delete ${item.title}`,
    [
      {text: 'Cancel', onPress: null, style: 'cancel'},
      {
        text: 'Yes',
        onPress: () => {
          const filtered = items.filter(el => el.id !== item.id);
          dispatch(removeItem(filtered, item));
        },
      },
    ],
    {cancelable: true},
  );
};

export {IncreaseItem, DecreaseItem, DeleteItem};
