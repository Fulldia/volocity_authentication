import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import Picker from "react-native-picker-select";

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [selectedRole, setSelectedRole] = useState('user');
    const [password, setPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);


    const handleSignUp = async () => {
        try {
            const response = await fetch('http://192.168.1.74:8080/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    role: this.role,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error('Inscription échouée');
            };
            setIsModalVisible(true);
            setUsername('');
            setEmail('');
            setPassword('');
            setSelectedRole('');
            console.log('Inscription réussie');

        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error.message);
        }
    };

    const closeModal = () => {
        // Fermer la fenêtre modale
        setIsModalVisible(false);
    };
    return (
        <View style={styles.container}>
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
            <Picker
                onValueChange={(value) => setSelectedRole(value)}
                items={[
                    { label: 'Utilisateur', value: 'user' },
                    { label: 'Modérateur', value: 'mod' },
                    { label: 'Administrateur', value: 'admin' },
                ]}
            />

            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button title="S'inscrire" onPress={handleSignUp} />

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
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
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
    }
});

export default SignUpForm;
