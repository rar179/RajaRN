import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <LunoStack.Screen name='LunoDashboard' component={Luno} 
        options={
          ({navigation}) => {
            return { headerRight: () => (
              <Button
                onPress={() => navigation.openDrawer()}
                title="||||"
                color="#000"
              />
            )}
          }
        }
      />
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
      <BinanceStack.Screen name='BinanceDashboard' component={Binance} 
        options={
          ({navigation}) => {
            return { headerRight: () => (
              <Button
                onPress={() => navigation.openDrawer()}
                title="||||"
                color="#000"
              />
            )}
          }
        }
      />
      <BinanceStack.Screen name='Details' component={Details} />
    </BinanceStack.Navigator>
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

const Drawer = createDrawerNavigator();

const DrawerScreenStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
      }}
    >
      <Drawer.Screen name='drawer' component={DashboardScreenStack} />
    </Drawer.Navigator>
  )
}

const DashboardNavigator = () => {
  return <DrawerScreenStack />;
};

export default DashboardNavigator;
