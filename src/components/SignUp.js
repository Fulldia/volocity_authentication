import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
    Text,
    TouchableOpacity,
    Platform,
    TouchableWithoutFeedback
} from 'react-native';
import Picker from "react-native-picker-select";
import {useNavigation} from "@react-navigation/native";

function setError(lesMotsDePasseNeCorrespondentPas) {

}

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [selectedRole, setSelectedRole] = useState('user');
    const [password, setPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const clearErrorMessage = () => {
        setErrorMessage('');
    };


    const handleSignUp = async (confirmPassword) => {
        if (password !== confirmPassword) {
            setErrorMessage("Les mots de passe ne correspondent pas.");
            console.log('Les mots de passe ne correspondent pas');
        } else {
            setError('');
            try {
                const response = await fetch('http://192.168.1.74:8080/api/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                        email: email,
                        role: "user",
                        password: password,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Inscription échouée');
                }
                ;
                setIsModalVisible(true);
                setUsername('');
                setEmail('');
                setPassword('');
                setSelectedRole('');
                console.log('Inscription réussie');

            } catch (error) {
                console.error('Erreur lors de l\'inscription:', error.message);
            }
        }
    };

    const closeModal = () => {
        // Fermer la fenêtre modale
        setIsModalVisible(false);
    };
    return (
            <View style={styles.form}>
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Nom d'utilisateur"
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                keyboardType="email-address"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
                onPressIn={clearErrorMessage}
            />
            <TextInput
                style={styles.input}
                placeholder="Vérifier mot de passe"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
                onPressIn={clearErrorMessage}
            />
            <TouchableOpacity onPress={closeModal} style={styles.button}>
                <Text style={styles.text}>S'inscrire</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Inscription réussie !</Text>
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
    form: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: '20%',
        marginTop: 130,
        marginBottom: 0,

    },
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
    errorText: {
    color: 'red',
        textAlign: 'left',
        marginBottom: 20,
        fontFamily: 'Outfit-Medium',
    },
});

export default SignUpForm;
