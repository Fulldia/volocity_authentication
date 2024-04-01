import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Button, Modal} from 'react-native';
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import StationsPage from "./StationsPage";
import SignUpButton from "../components/SignUpButton";

const LoginScreen = () => {

        return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/volocopter_Logo.jpg')} // Spécifiez le chemin de votre image
                style={styles.image}
            />
            <Login />

            <SignUpButton />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    image: {
        width: 250,
        height: 40,
        alignSelf: 'center',
        marginBottom: 50,
        marginTop:0,
    },
    text: {
        textAlign: 'center',
    },
});

export default LoginScreen;
