import {StyleSheet, TextInput, Text, View, Image, Button} from "react-native";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import SignUpButton from "../components/SignUpButton";

const SignUpScreen = ({nab}) => {

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/volocopter_Logo.jpg')} // Spécifiez le chemin de votre image
                style={styles.image}
            />
            <Text style={styles.text1}>Créer un compte</Text>
            <Text style={styles.text2}>Veuillez entrer vos coordonnées</Text>

            <SignUp />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50,
    },
        text1: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    text2: {
        textAlign: 'center',
        fontSize: 15,
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
        marginBottom: 15,
        marginTop:-80,
    },
    text: {
        textAlign: 'center',
    },
});
export default SignUpScreen;