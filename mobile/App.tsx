import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/contexts/auth';
import { Routes } from './src/routes/';
import theme from './src/theme';

function App(): JSX.Element {

  console.log("Rendering App component");

  
  return (
    <SafeAreaProvider style={{ backgroundColor: theme.COLORS.WHITE }}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
