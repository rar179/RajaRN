import { View , Text , TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../components/CustomTextInput';
import { login, signup } from '../services';
import { useDispatch } from 'react-redux';
import { setReduxUser } from '../redux/action';

const LoginContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoginFormContainer = styled(View)`
  border-width: 1px;
  border-color: black;
`;


const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userName , setUserName] = useState('')
  const [password , setPassword] = useState('')

  const loginFunction = (userName,password) => {
    login({userName,password}).then(success => {
      if(success) {
        //store user data in redux
        dispatch(setReduxUser({userName,password}));
      }
      else {
        alert('Invalid login')
      }
    })
  }

  return (
    <LoginContainer>
      <LoginFormContainer>
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
            loginFunction(userName,password)
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
          <Text>Create new account</Text>
        </TouchableOpacity>
      </LoginFormContainer>
    </LoginContainer>
  )
}

export default Login;