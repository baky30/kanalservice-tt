import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './src/navigation/MainStack';
import { UserProvider } from './src/context/UserContext';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <UserProvider>
          <StatusBar barStyle='dark-content' backgroundColor={'#E4B062'} />
          <MainStack />
        </UserProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
