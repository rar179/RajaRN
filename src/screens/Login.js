import { View , Text , TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../components/CustomTextInput';
import { login, signup } from '../services';
import { useDispatch } from 'react-redux';
import { setReduxUser } from '../redux/action';
import AsyncStorage from '@react-native-community/async-storage';
import { objToJson } from '../utils';

const LoginContainer = styled(View)`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const LoginFormContainer = styled(View)`
  padding: 20px;
  border-radius: 10px;
  background-color: #0884ff;
`;

const LoginButton = styled(View)`
  width: 100%;
  height: 40px;
  background-color: black;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const LoginButtonText = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

const LoginForm = ({onFormChangeText,isValidForm}) => {
  const [userName , setUserName] = useState('')
  const [password , setPassword] = useState('')

  //check if empty
  const checkValid = () => {
    return userName.length > 0 && password.length > 0;
  }

  useEffect(() => {
    onFormChangeText({userName,password})
    isValidForm(checkValid())
  },[userName,password])

  return (
    <View>
      <CustomTextInput 
        label={'Username / Email'} 
        onChangeText={(text) => {
          setUserName(text)
        }}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <CustomTextInput 
        label={'Password'} 
        secureTextEntry={true} 
        onChangeText={(text) => {
          setPassword(text)
          // onFormChangeText({userName,text})
        }}
      />
    </View>
  )
}


const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userData , setUserData] = useState({})
  const [valid, setValid] = useState(false);

  const loginFunction = () => {
    if(!valid) {
      alert('Invalid field');
      return;
    }
    login(userData).then(success => {
      if(success) {
        //store user data in redux
        dispatch(setReduxUser(userData));
        //save in app storage
        AsyncStorage.setItem('@Store:userData', objToJson(userData));
      }
      else {
        alert('Invalid login')
      }
    })
  }

  return (
    <LoginContainer>
      <LoginFormContainer>
        <LoginForm 
          onFormChangeText={(userData) => {
            setUserData(userData);
          }}
          isValidForm={(validity) => setValid(validity)}
        />
        <TouchableOpacity
          onPress={() => {
            loginFunction()
          }}
        >
          <LoginButton>
            <LoginButtonText>Login</LoginButtonText>
          </LoginButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
          <Text>Create new account</Text>
        </TouchableOpacity>
      </LoginFormContainer>
    </LoginContainer>
  )
}

export default Login;