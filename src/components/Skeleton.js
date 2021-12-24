import {View, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';

const Skeleton = (props) => {
  const { headerTitle, content } = props;

  return (<View style={{flex: 1, backgroundColor: 'white'}}>
    {content}
  </View>)
}

export default Skeleton;