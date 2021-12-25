import { View , Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { } from '../services';
import CryptoCardList from '../components/CryptoCardList';

const BinanceContainer = styled(View)`
  flex: 1;
  background-color: white;
`;

const Binance = (props) => {

    //componentdidmount
    useEffect(() => {
      alert('Not Done')
    }, []);
  
  return (
    <BinanceContainer>
    </BinanceContainer>
  )
}

const mapReduxStateToProps = (state, props) => ({
  userData: state.common.userData,
});

export default connect(mapReduxStateToProps)(Binance);