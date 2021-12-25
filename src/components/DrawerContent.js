import { View , Text , TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { connect,useDispatch } from 'react-redux';
import { setReduxUser } from '../redux/action';
import AsyncStorage from '@react-native-community/async-storage';

const UserView = styled(View)`
  height: 100px;
  align-items: center;
  justify-content: center;
`;

const UserViewText = styled(Text)`
  font-size: 20px;
  color: black;
`;

const DrawerContent = ({navigation, userData}) => {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView>
      <UserView>
        <UserViewText>{`Welcome ${userData.userName}`}</UserViewText>
      </UserView>
      <DrawerItem
        label="Logout"
        onPress={() => {
          //clear user redux
          navigation.closeDrawer();
          dispatch(setReduxUser({}));
          //clear app storage
          AsyncStorage.removeItem('@Store:userData')
        }}
      />
      <DrawerItem
        label="Close drawer"
        onPress={() => navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const mapReduxStateToProps = (state, props) => ({
  userData: state.common.userData,
});

export default connect(mapReduxStateToProps)(DrawerContent);