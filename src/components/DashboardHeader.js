import {View, Text} from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';

const HeaderView = styled(View)`
  height: 80px;
  width: 100%;
  background-color: '#fafafa';
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
`;

const HeaderTitle = styled(Text)`
  font-size: 34px;
  font-weight: bold;
`;

const DashboardHeader = ({navigation, headerTitle}) => {

  return (
    <HeaderView>
      <HeaderTitle>{headerTitle}</HeaderTitle>
    </HeaderView>
  )
}

export default DashboardHeader;