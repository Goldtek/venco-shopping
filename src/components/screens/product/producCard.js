import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {widthToDp, heightToDp} from 'rn-responsive-screen';
import {CartButton} from '../../custom';

export default function ProductCard({key, product, navigation}) {
  const dispatch = useDispatch();
  const cartReducer = useSelector(state => state.Cart);
  const {items} = cartReducer;

  const addToCart = product => {
    product.quantity = 1;
    const existingItem = items.find(item => item.id === product.id);
    let products = [];
    if (existingItem) {
      products = items.map(item =>
        item.id === product.id
          ? {...item, quantity: item.quantity + product.quantity}
          : item,
      );
    } else {
      products = [...items, {...product}];
    }
    const productsArray = Object.values(products);
    dispatch({type: 'ADD_ITEM', payload: productsArray});
    Alert.alert('Cart', 'Item Added to Cart');
  };

  return (
    <View style={styles.container} key={key}>
      <Image
        source={{
          uri: product.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.category}>{product.category}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>#{product.price}</Text>

        <CartButton title="Add To Cart" onPress={() => addToCart(product)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    borderRadius: 10,
    marginBottom: heightToDp(4),
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5,
    padding: 10,
    width: widthToDp(80),
    backgroundColor: '#fff',
  },
  image: {
    height: heightToDp(40),
    borderRadius: 7,
    marginBottom: heightToDp(2),
  },
  title: {
    fontSize: widthToDp(3.7),
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightToDp(3),
  },
  category: {
    fontSize: widthToDp(3.4),
    color: '#828282',
    marginTop: 3,
  },
  price: {
    fontSize: widthToDp(4),
    fontWeight: 'bold',
  },
});
