import AsyncStorage from '@react-native-community/async-storage';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { setReduxUser } from '../redux/action';

import Spinner from '../components/Spinner';

import { NavigationContainer } from '@react-navigation/native';
import DashboardNavigator from './DashboardNavigator';
import OnboardingNavigator from './OnboardingNavigator';
import Splash from '../screens/Splash';
import { checkSessionAPI } from '../services/index'
import { jsonToObj } from '../utils';

const AppNavigator = (props) => {
  const dispatch = useDispatch();
  const { userData, isLoading } = props;
  const [loadedSession ={} , setLoadedSession] = useState(false);
  
  //componentdidmount
  useEffect(() => {
    async function checkSession() {
      // You can await here
      const userData = await AsyncStorage.getItem('@Store:userData');
      checkSessionAPI(jsonToObj(userData)).then(resp => {
        dispatch(setReduxUser(resp));
        setLoadedSession(true);
      })
      // ...
    }
    checkSession()
  }, []);

  return (
    <NavigationContainer>
      {isLoading && <Spinner />}
      {!loadedSession && <Splash />}
      {loadedSession && (!isEmpty(userData) ? <DashboardNavigator/> : <OnboardingNavigator/>)}
    </NavigationContainer>
  );
};

const mapReduxStateToProps = (state, props) => ({
  userData: state.common.userData,
  isLoading: state.common.isLoading,
});

export default connect(mapReduxStateToProps)(AppNavigator);
