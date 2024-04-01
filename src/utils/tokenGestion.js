import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from "react";

// Fonction pour stocker le token JWT
const storeToken = async (token) => {
    try {
        await AsyncStorage.setItem('jwtToken', token);
        console.log('Token stored successfully');
    } catch (error) {
        console.log('Error storing token: ', error);
    }
};

// Fonction pour récupérer le token JWT


// Fonction pour supprimer le token JWT
const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('jwtToken');
        console.log('Token removed successfully');
    } catch (error) {
        console.log('Error removing token: ', error);
    }
};

export { storeToken, removeToken };
