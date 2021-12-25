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
  Image,
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
                style={{backgroundColor: 'transparent'}}
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
                style={{backgroundColor: 'transparent'}}
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
      <DashboardTab.Screen name='Luno' component={LunoScreenStack} 
        options={{
          tabBarIcon: ({size}) => (
            <Image 
              style={{ width: 30, height: 30}}
              source={{uri: 'https://d32exi8v9av3ux.cloudfront.net/auth-app/2021/12/01/25d979/auth-app/assets/img/default_og_image.png'}}
            />
          )
        }}
      />
      <DashboardTab.Screen name='Binance' component={BinanceScreenStack} 
        options={{
          tabBarIcon: ({size}) => (
            <Image 
              style={{ width: 30, height: 30}}
              source={{uri: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Binance-Coin-BNB-icon.png'}}
            />
          )
        }}
      />
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
