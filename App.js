import React from 'react';
import StationsPage from './src/screens/StationsPage';
import { View } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import SignUp from "./src/components/SignUp";

const App = () => {
  return (

      <View style={{ flex: 1 }}>
          <SignUp />
        <HomeScreen />
      </View>
  );
};

export default App;
