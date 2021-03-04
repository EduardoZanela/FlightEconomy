import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageByttonText,
  SignMessageByttonTextBold
} from '../../components/CommonStyledComponents';
import SignInput from '../../components/SignInput';

import FSEconomyLogo from '../../assets/images/FSEconomyLogo.svg'
import NameIcon from '../../assets/images/user.svg'
import EmailIcon from '../../assets/images/email.svg'
import PasswordIcon from '../../assets/images/lock.svg'

import RoutesName from '../../constants/routes';
import Api from '../../api/Api';
import { translate } from '../../locales';


export default ({navigation}) => {

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignupClick = async () => {
    if(emailField != '' && passwordField != ''){
      let res = await Api.signUp({name: nameField, email: emailField, password: passwordField});
      if(res.token){
        await AsyncStorage.setItem('token', res.token);
        navigation.reset({routes: [{name: RoutesName.MAIN_TAB}]})
      } else {
        alert(translate('SignInFieldsNotValid'));
      }
    } else {
      alert(translate('SignInFieldsNotValid'));
    }
  }

  return (
    <Container>
       <FSEconomyLogo width="100%" height="160"/>
       <InputArea>

        <SignInput IconSVG={NameIcon} placeholder={translate('TypeName')} value={nameField} onChangeText={t=>setNameField(t)}/>
        <SignInput IconSVG={EmailIcon} placeholder={translate('TypeEmail')} value={emailField} onChangeText={t=>setEmailField(t)}/>
        <SignInput IconSVG={PasswordIcon} placeholder={translate('TypePassword')} value={passwordField} onChangeText={p=>setPasswordField()} password={true}/>

        <CustomButton onPress={handleSignupClick}>
          <CustomButtonText>{translate('Login')}</CustomButtonText>
        </CustomButton>

       </InputArea>

       <SignMessageButton onPress={() => navigation.reset({routes: [{name: RoutesName.SIGN_IN}]})}>

         <SignMessageByttonText>{translate('HaveAccount')}</SignMessageByttonText>
         <SignMessageByttonTextBold>{translate('DoLogin')}</SignMessageByttonTextBold>

       </SignMessageButton>
    </Container>
  );
}