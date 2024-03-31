import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LoginScreen from "./src/screens/LoginScreen";



const App = () => {
  return (
          <View style={styles.container}>
        <LoginScreen />
          </View>
  );

};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
}

export default App;
