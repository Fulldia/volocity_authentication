import React, {useState} from 'react';
import {TouchableOpacity, Modal, Text, StyleSheet, Alert, View} from 'react-native';
import { useNavigation } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = ({ onLogoutSuccess }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    const handleLogout = async () => {
        if (!isLoggedOut) {
            try {
                const response = await fetch('http://192.168.1.74:8080/api/auth/logout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                await AsyncStorage.removeItem('jwtToken');
                console.log('response', response);
                setIsModalVisible(true);
                setIsLoggedOut(true);
            } catch (error) {
                console.error('Error:', error);
                Alert.alert('Erreur', 'Impossible de se déconnecter en ce moment.');
            }
        }
    };
    const closeModal = () => {
        // Fermer la fenêtre modale
        setIsModalVisible(false);
    };

    return (
        <View>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Se déconnecter</Text>
        </TouchableOpacity>

    <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
    >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.modalText}>Déconnexion réussie !</Text>
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
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#610C9F',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        width: '80%',
        height: 50,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Outfit-Medium',
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
});

export default Logout;
