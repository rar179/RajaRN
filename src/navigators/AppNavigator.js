import { isEmpty } from 'lodash';
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
import { connect } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import DashboardNavigator from './DashboardNavigator';
import OnboardingNavigator from './OnboardingNavigator';

const AppNavigator = (props) => {
  const { userData } = props;

  return (
    <NavigationContainer>
      {!isEmpty(userData) ? <DashboardNavigator/> : <OnboardingNavigator/>}
    </NavigationContainer>
  );
};

const mapReduxStateToProps = (state, props) => ({
  userData: state.common.userData,
});

export default connect(mapReduxStateToProps)(AppNavigator);
