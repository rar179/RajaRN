import { View , Text , TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../components/CustomTextInput';
import { login, signup } from '../services';
import { useDispatch } from 'react-redux';
import { setReduxUser } from '../redux/action';

const SignUpContainer = styled(View)`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const SignUpFormContainer = styled(View)`
  padding: 20px;
  border-radius: 10px;
  background-color: #0884ff;
`;

const SignUpButton = styled(View)`
  width: 100%;
  height: 40px;
  background-color: black;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const SignUpButtonText = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

const SignUp = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const [userName , setUserName] = useState('')
  const [password , setPassword] = useState('')

  const signupFunction = (userName,password) => {
    signup({userName,password}).then(success => {
      if(success) {
        navigation.navigate('Login')
      }
      else {
        alert('Invalid signup')
      }
    })
  }

  return (
    <SignUpContainer>
      <SignUpFormContainer>
        <CustomTextInput 
          label={'New Username / Email'} 
          onChangeText={(text) => setUserName(text)}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <CustomTextInput 
          label={'New Password'} 
          secureTextEntry={true} 
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={() => {
            signupFunction(userName,password)
          }}
        >
          <SignUpButton>
            <SignUpButtonText>Sign Up</SignUpButtonText>
          </SignUpButton>
        </TouchableOpacity>
      </SignUpFormContainer>
    </SignUpContainer>
  )
}

export default SignUp;