import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import AppNavigator from './src/navigators/AppNavigator';
//redux
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
};

export default App;
