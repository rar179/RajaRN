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

import Splash from './screens/Splash';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
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
  );
};

export default App;
