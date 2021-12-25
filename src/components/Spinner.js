import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Overlay = styled(View)`
  position: absolute;
  z-index: 10;
  elevation: 10;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const Spinner = (props) => {

  return (
    <Overlay>
      <ActivityIndicator color={'#000'}/>
    </Overlay>
  )
}

export default Spinner;