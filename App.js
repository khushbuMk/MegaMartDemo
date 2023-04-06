import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStore from './src/AsyncStore';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  const [token, setToken] = useState();
  const fetchToken = useCallback(async () => {
    setToken(await AsyncStore.retrieveToken())
    console.log(token)
  }, [token])

  useEffect(() => {
    fetchToken()
  }, [token])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false
        }}
      >
        {token ?
          <Stack.Screen name="Home" >
            {(props) => <Home {...props} setToken={setToken} />}
          </Stack.Screen>
          :
          <Stack.Screen name="Login" options={{ headerTitle: '' }} >
            {(props) => <Login {...props} setToken={setToken} />}
          </Stack.Screen>
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
