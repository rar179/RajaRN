import { View , Text , TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../components/CustomTextInput';
import { login, signup } from '../services';
import { useDispatch } from 'react-redux';
import { setReduxUser } from '../redux/action';

const SignIpContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const SignUpFormContainer = styled(View)`
  border-width: 1px;
  border-color: black;
`;

const SignUp = () => {
  const dispatch = useDispatch();
  const [userName , setUserName] = useState('')
  const [password , setPassword] = useState('')

  const signupFunction = (userName,password) => {
    signup({userName,password}).then(success => {
      if(success) {
        //store user data in redux
        dispatch(setReduxUser({userName,password}));
      }
      else {
        alert('Invalid signup')
      }
    })
  }

  return (
    <SignIpContainer>
      <SignUpFormContainer>
        <CustomTextInput 
          label={'Username / Email'} 
          onChangeText={(text) => setUserName(text)}
        />
        <CustomTextInput 
          label={'Password'} 
          secureTextEntry={true} 
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={() => {
            signupFunction(userName,password)
          }}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </SignUpFormContainer>
    </SignIpContainer>
  )
}

export default SignUp;