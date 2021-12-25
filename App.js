import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import AppNavigator from './src/navigators/AppNavigator';
import OnboardingNavigator from './src/navigators/OnboardingNavigator';
import Splash from './src/screens/Splash';
//redux
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  const [haveSession , setHaveSession] = useState(false);

  //componentdidmount
  useEffect(() => {
    //api call for session check
    setTimeout(() => {
      setHaveSession(true);
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      {haveSession ? <AppNavigator/> : <Splash/>}
    </Provider>
  );
};

export default App;
