import { View , Text , TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../components/CustomTextInput';
import { login } from '../services';
import { useDispatch } from 'react-redux';
import { setReduxUser } from '../redux/action';

const SplashContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoginFormContainer = styled(View)`
  border-width: 1px;
  border-color: black;
`;

loginFunction = (userName,password,navigation,dispatch) => {
  login({userName,password}).then(success => {
    if(success) {
      //store user data in redux
      dispatch(setReduxUser({userName,password}));
      
      navigation.navigate('Dashboard')
    }
    else {
      alert('Invalid login')
    }
  })
}

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userName , setUserName] = useState('')
  const [password , setPassword] = useState('')

  return (
    <SplashContainer>
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
            loginFunction(userName,password,navigation,dispatch)
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </LoginFormContainer>
    </SplashContainer>
  )
}

export default Login;