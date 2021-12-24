import { View , Text , TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';

const DetailsContainer = styled(View)`
  flex: 1;
  background-color: white;
`;

const DetailsFormContainer = styled(View)`
  margin: 40px 20px 0px 20px;
`;

const CryptoTitle = styled(Text)`
  font-size: 30px;
  margin-bottom: 30px;
`;

const CryptoDesc = styled(Text)`
  font-size: 20px;
`;

const Login = ({ route, navigation }) => {
  const { details } = route.params;
  const { title = '', fullDescription = '' } = details;

  return (
    <DetailsContainer>
      <DetailsFormContainer>
        <CryptoTitle>{title}</CryptoTitle>
        <CryptoDesc>{fullDescription}</CryptoDesc>
      </DetailsFormContainer>
    </DetailsContainer>
  )
}

export default Login;