import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
import {View} from 'react-native-ui-lib';
import {useSelector} from 'react-redux';
import {widthToDp} from 'rn-responsive-screen';
import CartItem from './cartItem';

export default function Cart() {
  const cartReducer = useSelector(state => state.Cart);
  const {items} = cartReducer;
  console.log('prods in cart', items.length);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatlist}
        data={cartReducer.items}
        renderItem={({item, index}) => <CartItem key={index} product={item} />}
        keyExtractor={(item, index) => String(index)}
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() =>
          <View marginT-20 marginB-10 row centerH>
            <Text>Total Price: {cartReducer.total}</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
  },
  flatlist: {
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthToDp(90),
    marginTop: 10,
  },
  total: {
    borderTopWidth: 1,
    paddingTop: 10,
    borderTopColor: '#E5E5E5',
    marginBottom: 10,
  },
  cartTotalText: {
    fontSize: widthToDp(4.5),
    color: '#989899',
  },
});
