import { View , Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { getLunoPrices } from '../services';
import CryptoCardList from '../components/CryptoCardList';
import { useNavigation } from '@react-navigation/native';

const LunoContainer = styled(View)`
  flex: 1;
  background-color: #13326b;
`;

function searchCryptoDetail(currency, cryptoDetailsArr) {
  let detail = '';
  cryptoDetailsArr.map(item => {
    if(item.currency === currency && item.code.startsWith('what-is-')){
      detail = item;
    }
  })

  return detail;
}

const Luno = (props) => {
  const { userData } = props;
  const navigation = useNavigation();
  const [lunoPriceArr = [], setLunoPriceArr] = useState([]);
  const [cryptoDetailsArr = [], setCryptoDetailsArr] = useState([]);

  //componentdidmount
  useEffect(() => {
    getLunoPrices().then(res => {
      const { basicChart, learnArticles } = res;
      const { availablePairs } = basicChart;
      setLunoPriceArr(availablePairs);
      setCryptoDetailsArr(learnArticles);
    })
  }, []);

  const onPullToRefresh = () => {
    getLunoPrices().then(res => {
      const { basicChart, learnArticles } = res;
      const { availablePairs } = basicChart;
      setLunoPriceArr(availablePairs);
      setCryptoDetailsArr(learnArticles);
    })
  }
  
  return (
    <LunoContainer>
      <CryptoCardList 
        data={lunoPriceArr} 
        onPress={(currency) => { 
            const details = searchCryptoDetail(currency,cryptoDetailsArr);
            navigation.navigate('Details', { details }); 
          }
        }
        onRefresh={onPullToRefresh}
      />
    </LunoContainer>
  )
}

const mapReduxStateToProps = (state, props) => ({
  userData: state.common.userData,
});

export default connect(mapReduxStateToProps)(Luno);