import { View , Text , TextInput, TouchableOpacity, ScrollView, RefreshControl, Image } from 'react-native';
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
  background-color: ${props => props.bgColor};
  height: 70px;
`;

const CryptoIcon = styled(Image)`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

const CryptoName = styled(Text)`
  font-size: 25px;
  color: ${props => props.color};
  font-weight: bold;
`;

const CryptoPrice = styled(Text)`
  font-size: 15px;
  color: ${props => props.color};
  font-weight: bold;
`;

const cryptoNameMap = {
  XBT : 'Bitcoin',
  ETH : 'Ethereum',
  BCH : 'Bitcoin Cash',
  XRP : 'XRP',
  LTC : 'Litecoin',
}

const cryptoIconMap = {
  XBT : 'https://d32exi8v9av3ux.cloudfront.net/static/icons/currencies/ic_btc_thumbnail.png',
  ETH : 'https://d32exi8v9av3ux.cloudfront.net/static/icons/currencies/ic_eth_thumbnail.png',
  XRP : 'https://d32exi8v9av3ux.cloudfront.net/static/icons/currencies/ic_xrp_thumbnail_alt.png',
  BCH : 'https://d32exi8v9av3ux.cloudfront.net/static/icons/currencies/ic_bch_thumbnail.png',
  LTC : 'https://d32exi8v9av3ux.cloudfront.net/static/icons/currencies/ic_ltc_thumbnail.png',
}

const cryptoThemeMap = {
  XBT : { bg: '#f3a515', font: '#fff'},
  ETH : { bg: '#9012fd', font: '#fff'},
  BCH : { bg: '#378d3c', font: '#fff'},
  XRP : { bg: '#ffffff', font: '#000'},
  LTC : { bg: '#a6a9aa', font: '#fff'},
}

const CryptoCardList = (props) => {
  const { data, onPress, onRefresh } = props;
  
  const content = (Array.isArray(data) && data.length) ? data.map((item, index) => {
    const { amount, currency, pair } = item;
    
    return (
      <TouchableOpacity key={index} onPress={() => onPress(pair.base)}>
        <CryptoCardBox bgColor={cryptoThemeMap[pair.base].bg}>
          <View style={{}}>
            <CryptoIcon 
              source={{uri: cryptoIconMap[pair.base]}}
            />
          </View>
          <View style={{flex: 1}}>
            <CryptoName color={cryptoThemeMap[pair.base].font}>{cryptoNameMap[pair.base]}</CryptoName>
            <View style={{alignItems: 'flex-end'}}>
              <CryptoPrice color={cryptoThemeMap[pair.base].font}>{`${currency} ${formatTwoDecimal(amount)}`}</CryptoPrice>
            </View>
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