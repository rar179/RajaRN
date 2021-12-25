import { isEmpty } from 'lodash';
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';

import { NavigationContainer } from '@react-navigation/native';
import DashboardNavigator from './DashboardNavigator';
import OnboardingNavigator from './OnboardingNavigator';

const AppNavigator = (props) => {
  const { userData, isLoading } = props;

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
