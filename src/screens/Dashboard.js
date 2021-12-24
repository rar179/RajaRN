import { View , Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { getLunoPrices } from '../services';
import CryptoCardList from '../components/CryptoCardList';

const DashboardContainer = styled(View)`
  /* */
`;

const Dashboard = (props) => {
  const { userData } = props;
  const [lunoPriceArr, setLunoPriceArr] = useState([]);

    //componentdidmount
    useEffect(() => {
      getLunoPrices().then(res => {
        const { basicChart } = res;
        const { availablePairs } = basicChart;
        setLunoPriceArr(availablePairs);
      })
    }, []);
  
  return (
    <DashboardContainer>
      <Text>Dashboard</Text>
      <Text>Welcome {!!userData ? userData.userName : 'Guest'}</Text>
      <CryptoCardList data={lunoPriceArr}/>
    </DashboardContainer>
  )
}

const mapReduxStateToProps = (state, props) => ({
  userData: state.common.userData,
});

export default connect(mapReduxStateToProps)(Dashboard);