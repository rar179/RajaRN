/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
//redux
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator 
          initialRouteName='SplashScreen' 
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen name='SplashScreen' component={Splash} />
          <RootStack.Screen name='LoginScreen' component={Login} />
          <RootStack.Screen name='Dashboard' component={Dashboard} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
