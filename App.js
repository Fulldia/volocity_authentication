import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import {NavigationContainer} from "@react-navigation/native";




const App = () => {
  return (
      <NavigationContainer>
          <View style={styles.container}>
        {/*<LoginScreen />*/}
              <SignUpScreen/>

          </View>
      </NavigationContainer>
  );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
});

export default App;
