import { View , Text , TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { useDispatch } from 'react-redux';
import { setReduxUser } from '../redux/action';

const DrawerContent = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Logout"
        onPress={() => {
          //clear user redux
          navigation.closeDrawer();
          dispatch(setReduxUser({}));
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

export default DrawerContent;