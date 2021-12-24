import { View , Text,  } from 'react-native';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const SplashContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Splash = () => {
  const navigation = useNavigation();

  //componentdidmount
  useEffect(() => {
    //simulate session checking
    setTimeout(() => {
      navigation.navigate('Dashboard')
    }, 2000);
  }, []);

  return (
    <SplashContainer>
      <Text>Splash</Text>
    </SplashContainer>
  )
}

export default Splash;