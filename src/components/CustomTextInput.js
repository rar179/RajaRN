import { View , Text , TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';

const InputContainer = styled(View)`
  margin-bottom: 10px;
`;

const InputLabel = styled(Text)`
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;

const InputBox = styled(TextInput)`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  background-color: white;
  padding: 0;
  text-align: center;
`;

const CustomTextInput = (props) => {
  const { label } = props;

  return (
   <InputContainer>
     <InputLabel>{label}</InputLabel>
     <InputBox {...props}/>
   </InputContainer> 
  )
}

export default CustomTextInput;