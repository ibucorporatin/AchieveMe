import React from 'react';
import MainStackNavigator from './src/navigation/stack/MainStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import StoreProvider from './src/store/wrapper/StoreProvider';
const App = () => {
  return (
    <StoreProvider>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
