import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Button, Modal} from 'react-native';
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import StationsPage from "./StationsPage";
import SignUpButton from "../components/SignUpButton";
import Logout from "../components/Logout";
import {getToken} from "../utils/tokenGestion";
import * as navigation from "expo-router/build/global-state/routing";
import AsyncStorage from "@react-native-async-storage/async-storage";


const LoginScreen = () => {
    const [isToken, setIsToken] = useState(false);


    useEffect(() => {
        // Vérifier si l'utilisateur est déjà connecté
        console.log("useEffect");
        console.log('isToken: ', isToken);
        const getToken = async () => {
            try {
                const token = await AsyncStorage.getItem('jwtToken');
                if (token === null) {
                    console.log('No token stored');
                    setIsToken(false);
                    return null;
                } else {
                    console.log('Token retrieved successfully !');
                    console.log('Token: ', token)
                    setIsToken(true);
                    return token;
                }
            } catch (error) {
                console.log('Error retrieving token: ', error);
                return null;
            }
        };
        getToken();
    }, [isToken]);

        return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/volocopter_Logo.jpg')} // Spécifiez le chemin de votre image
                style={styles.image}
            />
            <Login isToken={isToken} setIsToken={setIsToken}/>

            {/*<Logout isToken={isToken} setIsToken={setIsToken}  />*/}

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
