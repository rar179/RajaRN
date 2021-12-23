import { View , Text , TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';

const InputLabel = styled(Text)`
  font-size: 20px;
`;

const InputBox = styled(TextInput)`
  width: 250px;
  height: 25px;
  background-color: white;
`;

const CustomTextInput = (props) => {
  const { label } = props;

  return (
   <View>
     <InputLabel>{label}</InputLabel>
     <InputBox {...props}/>
   </View> 
  )
}

export default CustomTextInput;