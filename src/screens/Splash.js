import { View , Text,  } from 'react-native';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';

const SplashContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Splash = () => {

  return (
    <SplashContainer>
      <Text>Splash</Text>
    </SplashContainer>
  )
}

export default Splash;