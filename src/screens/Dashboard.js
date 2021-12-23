import { View , Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const SplashContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Dashboard = () => {
  return (
    <SplashContainer>
      <Text>Dashboard</Text>
    </SplashContainer>
  )
}

export default Dashboard;