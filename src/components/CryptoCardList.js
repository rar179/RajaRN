import { View , Text , TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { isEmpty } from 'lodash';
import { formatTwoDecimal } from '../utils'

const CryptoCardView = styled(View)`
  padding: 0px 50px 0px 50px;
`;

const CryptoCardBox = styled(View)`
  border-width: 1px;
  border-color: black;
  margin-bottom: 20px;
  flex-direction: row;
`;

const CryptoName = styled(Text)`
  font-size: 20px;
`;

const CryptoPrice = styled(Text)`
  font-size: 20px;
`;

const cryptoMap = {
  XBT : 'Bitcoin',
  ETH : 'Ethereum',
  BCH : 'Bitcoin Cash',
  XRP : 'XRP',
  LTC: 'Litecoin',
}

const CryptoCardList = (props) => {
  const { data, onPress } = props;
  
  const content = (Array.isArray(data) && data.length) ? data.map((item, index) => {
    const { amount, currency, pair } = item;
    
    return (
      <TouchableOpacity key={index} onPress={() => onPress(pair.base)}>
        <CryptoCardBox>
          <View style={{flex: 1}}>
            <CryptoName>{cryptoMap[pair.base]}</CryptoName>
          </View>
          <View>
            <CryptoPrice>{`${currency} ${formatTwoDecimal(amount)}`}</CryptoPrice>
          </View>
        </CryptoCardBox>
      </TouchableOpacity>
    );
  }) :
  <View/>
  
  return (
   <CryptoCardView>
     {content}
   </CryptoCardView> 
  )
}

export default CryptoCardList;