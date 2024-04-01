import AsyncStorage from '@react-native-async-storage/async-storage';

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
const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('jwtToken');
        if (token === null) {
            console.log('No token stored');
            return null;
        } else {
            console.log('Token retrieved successfully !');
            console.log('Token: ', token)
        }
    } catch (error) {
        console.log('Error retrieving token: ', error);
        return null;
    }
};

// Fonction pour supprimer le token JWT
const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('jwtToken');
        console.log('Token removed successfully');
    } catch (error) {
        console.log('Error removing token: ', error);
    }
};

export { storeToken, getToken, removeToken };
