import { View , Text , TextInput, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { isEmpty } from 'lodash';
import { formatTwoDecimal } from '../utils'

const CryptoCardView = styled(View)`
  flex: 1;
`;

const CryptoCardBox = styled(View)`
  border-radius: 10px;
  padding: 10px;
  margin: 10px 50px 10px 50px;
  flex-direction: row;
  background-color: #e0e0e0;
  height: 70px;
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
  const { data, onPress, onRefresh } = props;
  
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
      <ScrollView 
        style={{paddingTop: 40}}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={onRefresh}
          />
        }
      >
        {content}
      </ScrollView>
    </CryptoCardView> 
  )
}

export default CryptoCardList;