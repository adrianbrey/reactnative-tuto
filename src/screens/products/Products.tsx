import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView } from 'react-native';
import { Button, LinearProgress, Text } from 'react-native-elements';
import Counter from '../../app/components/counter/Counter';
import ProductItem from '../../app/product-item/ProductItem';
import ProductsService from '../../app/services/ProductsService';
import styles from './product-styles';

const Products = () => {
  const [Products, setProducts] = useState<any>([]);
  const navigation = useNavigation<any>();


  const onPressButton = () => {
    navigation.navigate('product-details');
  };



  useEffect(() => {
    const asyncCall = async () => {
      const result = await ProductsService.getProducts();
      setProducts(result.data);
    }

    asyncCall();
  }, []);

  console.log('products', Products);

  if (Products.length === 0) {
    return <LinearProgress />;
  }

  const renderItem = ({ item }) => (
    <ProductItem item={item} />
  );


  return (
    <SafeAreaView style={styles.container}>
      <Text h4>Soy la página de productos</Text>

      <FlatList
        data={Products}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>

  );
};

export default Products;
