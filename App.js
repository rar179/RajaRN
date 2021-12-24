import 'react-native-gesture-handler';
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

import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Luno from './src/screens/Luno';
import Binance from './src/screens/Binance';
import Details from './src/screens/Details';
import DrawerContent from './src/components/DrawerContent';
//redux
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

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

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <RootStack.Screen name='SplashScreen' component={Splash} />
        <RootStack.Screen name='LoginScreen' component={Login} />  */}
        <DashboardScreenStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
