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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Luno from '../screens/Luno';
import Binance from '../screens/Binance';
import Details from '../screens/Details';
import DrawerContent from '../components/DrawerContent';

const RootStack = createNativeStackNavigator();

const LunoStack = createNativeStackNavigator();

const LunoScreenStack = () => {
  return (
    <LunoStack.Navigator
      initialRouteName='LunoDashboard'
    >
      <LunoStack.Screen name='LunoDashboard' component={Luno} />
      <LunoStack.Screen name='Details' component={Details} />
    </LunoStack.Navigator>
  )
}

const BinanceStack = createNativeStackNavigator();

const BinanceScreenStack = () => {
  return (
    <BinanceStack.Navigator
      initialRouteName='BinanceDashboard'
    >
      <BinanceStack.Screen name='BinanceDashboard' component={Binance} />
      <BinanceStack.Screen name='Details' component={Details} />
    </BinanceStack.Navigator>
  )
}

const Drawer = createDrawerNavigator();

const DrawerScreenStack = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name='Login' component={Login} />
    </Drawer.Navigator>
  )
}

const DashboardTab = createBottomTabNavigator();

const DashboardScreenStack = () => {
  return (
    <DashboardTab.Navigator
      initialRouteName='Dashboard' 
      screenOptions={{
        headerShown: false,
      }}
    >
      <DashboardTab.Screen name='Luno' component={LunoScreenStack} />
      <DashboardTab.Screen name='Binance' component={BinanceScreenStack} />
    </DashboardTab.Navigator>
  )
}

const DashboardNavigator = () => {
  return <DashboardScreenStack />;
};

export default DashboardNavigator;
