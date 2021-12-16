import React from "react";
import { View, Text, Image, Button } from 'react-native';
import styles from "../product-item/ProductsItems-styles";



const ProductItem = (props) => {


    const onPressButton = () => {
    };


    console.log('props:', props);
    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: props.item.image, }} />

            <Text style={styles.text}>{props.item.unitPrice}</Text>
            <Text style={styles.text}>{props.item.name}</Text>

            <Button onPress={onPressButton} title="Añadir al carrito" />
        </View>
    );
};

export default ProductItem;