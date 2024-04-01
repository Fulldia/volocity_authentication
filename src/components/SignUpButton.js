import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, KeyboardAvoidingView} from 'react-native';



const SignUpButton = () => {

    const handleSignUp = () => {

    };

    return (
        <KeyboardAvoidingView  style={styles.container} behavior="padding">
        <Text>Vous n'avez pas encore de compte ?</Text>
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.text}>S'inscrire</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 250,
        alignItems: 'center',
        marginBottom: 0,
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
    },
});

export default SignUpButton;
