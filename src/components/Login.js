import React, { useState } from 'react';
import {View, TextInput, Text, Button, StyleSheet, Alert, TouchableOpacity, Modal} from 'react-native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const clearErrorMessage = () => {
        setErrorMessage('');
    };

    const handleLogin = async () => {
        if (username.trim() === '' || password.trim() === '') {
            setErrorMessage("Veuillez saisir un nom d\'utilisateur et un mot de passe");
            return;
        } else {
            setErrorMessage('');
            try {
                const response = await fetch('http://192.168.1.74:8080/api/auth/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    }),
                });
                console.log(response)
                if (response.status !== 200) {
                    setErrorMessage("Nom d'utilisateur ou mot de passe incorrect");
                } else {
                    console.log(response.ok);
                    setIsModalVisible(true);
                }
            }
            catch (error) {
                console.error('Error:', error);
            }
        }
        // Réinitialiser les champs de saisie après la tentative de connexion
        setUsername('');
        setPassword('');
    };

    const closeModal = () => {
        // Fermer la fenêtre modale
        setIsModalVisible(false);
    };

    return (
        <View style={styles.container}>
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Nom d'utilisateur"
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <TextInput
                style={[styles.input, styles.input2]}
                placeholder="Mot de passe"
                secureTextEntry={true}
                onPressIn={clearErrorMessage}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Text style={styles.forgot}>Mot de passe oublié</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.text}>Se connecter</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Connexion réussie !</Text>
                        <TouchableOpacity onPress={closeModal}>
                            <Text style={styles.closeButton}>Fermer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        marginBottom: 10,
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
        marginRight: 12,
        marginBottom: 20,
        fontSize: 12,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    closeButton: {
        fontSize: 16,
        color: 'blue',
    },
    button: {
        backgroundColor: '#8CF5FF',
        color:"white",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    text: {
        color: 'black',
        fontSize: 16,
        alignSelf: 'center',
    },
    errorText: {
        color: 'red',
        textAlign: 'left',
        fontFamily: 'Outfit-Medium',
    },
});

export default LoginScreen;
