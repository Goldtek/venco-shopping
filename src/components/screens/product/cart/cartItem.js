import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {View} from 'react-native-ui-lib';
import React from 'react';
import {heightToDp, widthToDp} from 'rn-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {
  IncreaseItem,
  DecreaseItem,
  DeleteItem,
} from '../../../../actions/product';

export default function CartItem({product}) {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <View style={styles.info}>
        <View>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>
            {product.description} • #{product.price / 100}
          </Text>
        </View>
        <View marginT-20 marginB-10 row style={styles.flex}>
          <View row style={styles.divide}>
            <TouchableOpacity
              onPress={() => dispatch(IncreaseItem(product))}
              style={styles.button}>
              <Icon name="plus" size={14} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => dispatch(DecreaseItem(product))}
              style={styles.button}>
              <Icon name="minus" size={14} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => dispatch(DeleteItem(product))}
            style={styles.button}>
            <Icon name="delete" size={14} />
          </TouchableOpacity>
        </View>
        <View style={styles.footer} marginT-20>
          <Text style={styles.price}>${product.price * product.quantity}</Text>
          <Text style={styles.quantity}>{product.quantity}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: '#e6e6e6',
    width: widthToDp('90%'),
  },
  image: {
    width: widthToDp(30),
    height: heightToDp(30),
    borderRadius: 10,
  },
  title: {
    fontSize: widthToDp(4),
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    marginLeft: widthToDp(3),
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: heightToDp(2),
    width: widthToDp(50),
  },
  description: {
    fontSize: widthToDp(3.5),
    color: '#8e8e93',
    marginTop: heightToDp(2),
  },

  price: {
    fontSize: widthToDp(4),
  },
  quantity: {
    fontSize: widthToDp(4),
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#eee',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    justifyContent: 'space-between',
  },
  divide: {
    justifyContent: 'space-between',
    width: '60%',
  },
});
