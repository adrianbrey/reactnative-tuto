import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, LinearProgress, Text } from 'react-native-elements';
import Counter from '../../app/components/counter/Counter';
import ProductsService from '../../app/services/ProductsService';
import styles from './product-styles';

const Products = () => {
  const [Products, setProducts] = useState([]);
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

  return (
    <SafeAreaView style={styles.container}>
      <Text h4>Soy la página de productos</Text>
      <Button onPress={onPressButton} title="Ir a la página de detalles" />
      <Counter />
    </SafeAreaView>

  );
};

export default Products;
