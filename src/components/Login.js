import React, { useState } from 'react';
import {View, TextInput, Text, Button, StyleSheet, Alert, TouchableOpacity} from 'react-native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username.trim() === '' || password.trim() === '') {
            Alert.alert('Erreur', 'Veuillez saisir un nom d\'utilisateur et un mot de passe');
            return;
        }

        // Ici, vous pouvez implémenter la logique de connexion avec les données fournies
        // Par exemple, vous pouvez envoyer une requête à votre backend pour vérifier les informations d'identification

        // Réinitialiser les champs de saisie après la tentative de connexion
        setUsername('');
        setPassword('');

        // Afficher un message de connexion réussie (vous pouvez personnaliser cela selon vos besoins)
        Alert.alert('Succès', 'Connexion réussie !');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email ou pseudo"
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <TextInput
                style={[styles.input, styles.input2]}
                placeholder="Mot de passe"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Text style={styles.forgot}>Mot de passe oublié</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.text}>Se connecter</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 311,
        alignSelf: 'center',
        fontStyle   : 'italic',
        borderColor: '#EBEBEB',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor:'#EBEBEB',
        paddingHorizontal: 10,
    },
    input2: {
        marginBottom: 10,
    },
    forgot: {
        color:"grey",
        textAlign:"right",
        marginRight: 35,
        marginBottom: 20,
        fontSize: 12,
    },
    button: {
        backgroundColor: '#8CF5FF',
        color:"white",
        width: 311,
        height: 50,
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 4,
    },
});

export default LoginScreen;
