import React from 'react';
import StationsPage from './src/screens/StationsPage';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import SignUp from "./src/components/SignUp";
import Login from "./src/components/Login";
import SignUpButton from "./src/components/SignUpButton";
import {NavigationContainer, useNavigation} from '@react-navigation/native';



const App = () => {



  return (
      <NavigationContainer>
      <View style={styles.container}>
          <Image
              source={require('./assets/volocopter_Logo.jpg')} // Spécifiez le chemin de votre image
              style={styles.image}
          />
          <Login />
      </View>
          <SignUpButton />
      </NavigationContainer>
  );

};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
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
        marginBottom: 30,
    },
    text: {
        textAlign: 'center',
    },
}

export default App;
