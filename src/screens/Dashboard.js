import { View , Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

const SplashContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Dashboard = (props) => {
  const { userData } = props;
  
  return (
    <SplashContainer>
      <Text>Dashboard</Text>
      <Text>Welcome {userData.userName}</Text>
    </SplashContainer>
  )
}

const mapStateToProps = (state, props) => ({
  userData: state.common.userData,
});

export default connect(mapStateToProps)(Dashboard);