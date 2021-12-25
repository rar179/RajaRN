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

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const OnboardingStack = createNativeStackNavigator();

const OnboardingScreenStack = () => {
  return (
    <OnboardingStack.Navigator
      initialRouteName='Login'
      screenOptions={{animationEnabled: false}}
    >
      <OnboardingStack.Screen name='Login' component={Login} />
      <OnboardingStack.Screen name='SignUp' component={SignUp} />
    </OnboardingStack.Navigator>
  )
}

const OnboardingNavigator = () => {
  return <OnboardingScreenStack />;
};

export default OnboardingNavigator;
