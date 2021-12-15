import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Counter from '../../app/components/counter/Counter';
import ProductsService from '../../app/components/services/ProductsService';
import styles from './product-styles';

const Products = () => {
  const navigation = useNavigation<any>();

  const onPressButton = () => {
    navigation.navigate('product-details');
  };


  const getAsyncProducts = async () => {
    const result = await ProductsService.getProducts();
    console.log(result.data);
  }

  useEffect(() => {
    getAsyncProducts();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text h4>Soy la página de productos</Text>
      <Button onPress={onPressButton} title="Ir a la página de detalles" />
      <Button onPress={getAsyncProducts} title="Ramiro" />
      <Counter />
    </SafeAreaView>

  );
};

export default Products;
