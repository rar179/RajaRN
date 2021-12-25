import { isEmpty } from 'lodash';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { setReduxUser } from '../redux/action';

import Spinner from '../components/Spinner';

import { NavigationContainer } from '@react-navigation/native';
import DashboardNavigator from './DashboardNavigator';
import OnboardingNavigator from './OnboardingNavigator';

const AppNavigator = (props) => {
  const dispatch = useDispatch();
  const { userData, isLoading, session } = props;

  //componentdidmount
  useEffect(() => {
    dispatch(setReduxUser(session));
  }, []);

  return (
    <NavigationContainer>
      {isLoading && <Spinner />}
      {!isEmpty(userData) ? <DashboardNavigator/> : <OnboardingNavigator/>}
    </NavigationContainer>
  );
};

const mapReduxStateToProps = (state, props) => ({
  userData: state.common.userData,
  isLoading: state.common.isLoading,
});

export default connect(mapReduxStateToProps)(AppNavigator);
