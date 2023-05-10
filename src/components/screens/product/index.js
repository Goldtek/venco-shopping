import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import axios from 'axios';
import ProductCard from './producCard';
import {widthToDp} from 'rn-responsive-screen';
import EmptyProductView from './EmptyProductView';
export default function AllProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={products}
        renderItem={({item, index}) => (
          <ProductCard key={index} product={item} />
        )}
        keyExtractor={(item, index) => String(index)}
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <EmptyProductView />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
  },
  contentContainerStyle: {
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
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
