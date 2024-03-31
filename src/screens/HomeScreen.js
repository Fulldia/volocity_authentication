import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetchData();
    // }, []);
    //
    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('http://192.168.1.74:8080/api/test/all');
    //         const jsonData = await response.json();
    //         setData(jsonData);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

        const navigation = useNavigation();

        const handleSignUp = () => {
            // Naviguer vers la page SignUp
            navigation.navigate('SignUp');
        };


        return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/volocopter_Logo.jpg')} // Spécifiez le chemin de votre image
                style={styles.image}
            />
            <Login />
            <Text style={styles.text}>Vous n'avez pas de compte ?</Text>
            <TouchableOpacity onPress={handleSignUp}>
                <Text style={[styles.text, styles.link]}>S'inscrire</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    image: {
        width: 200, // Définissez la largeur de votre image
        height: 200, // Définissez la hauteur de votre image
        resizeMode: 'contain', // Modifiez cela selon vos besoins
        marginLeft: 85,
        marginTop: 30,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default HomeScreen;
