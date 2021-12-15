import { Button, Text } from 'react-native-elements';
import { View } from 'react-native';
import React, { useState } from 'react';
import styles from './counter-styles';

const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrementCount = () => {
        setCount(count + 1);
    };

    const onDecreaseCount = () => {
        setCount(count - 1);
    };

    return (
        <View style={styles.container}>
            <Button onPress={onDecreaseCount} disabled={count < 1} title="-" />
            <Text>Current value: {count}</Text>
            <Button onPress={onIncrementCount} title="+" />


        </View>
    );
};

export default Counter;