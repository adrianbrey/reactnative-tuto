import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    card: {
        backgroundColor: 'white',
        padding: 10,
        width: Dimensions.get('screen').width - 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        margin: 10

    },

    image: {
        width: 150,
        height: 150,
        resizeMode: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 18,
        fontWeight: "600",
    },

    button: {

    }
});

export default styles;