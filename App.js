import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import AppNavigator from './src/navigators/AppNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import Splash from './src/screens/Splash';
import { jsonToObj } from './src/utils';
//redux
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { isEmpty } from 'lodash';

const App = () => {
  const [session ={} , setSession] = useState({});
  const [loadedSession ={} , setLoadedSession] = useState(false);

  //componentdidmount
  useEffect(() => {
    async function checkSession() {
      // You can await here
      const userData = await AsyncStorage.getItem('@Store:userData');
      setSession(jsonToObj(userData));
      setLoadedSession(true);
      // ...
    }
    checkSession()
  }, []);

  return (
    <Provider store={store}>
      {loadedSession ? <AppNavigator session={session}/> : <Splash/>}
    </Provider>
  );
};

export default App;
