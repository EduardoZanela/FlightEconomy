import React, { useState } from 'react';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageByttonText,
  SignMessageByttonTextBold
} from '../../components/CommonStyledComponents';
import RoutesName from '../../constants/routes';
import Api from '../../api/Api';
import SignInput from '../../components/SignInput';
import { translate, transte } from '../../locales';
import FSEconomyLogo from '../../assets/images/FSEconomyLogo.svg'
import EmailIcon from '../../assets/images/email.svg'
import PasswordIcon from '../../assets/images/lock.svg'
import AsyncStorage from '@react-native-community/async-storage';



export default ({navigation}) => {

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSigninClick = async () => {
    if(emailField != '' && passwordField != ''){
      let res = await Api.signIn(emailField, passwordField);
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

        <SignInput IconSVG={EmailIcon} placeholder={translate('TypeEmail')} value={emailField} onChangeText={t=>setEmailField(t)}/>
        <SignInput IconSVG={PasswordIcon} placeholder={translate('TypePassword')} value={passwordField} onChangeText={p=>setPasswordField()} password={true}/>

        <CustomButton onPress={handleSigninClick}>
          <CustomButtonText>{translate('Login')}</CustomButtonText>
        </CustomButton>

       </InputArea>

       <SignMessageButton onPress={() => navigation.reset({routes: [{name: RoutesName.SIGN_UP}]})}>

         <SignMessageByttonText>{translate('DoesNotHaveAccount')}</SignMessageByttonText>
         <SignMessageByttonTextBold>{translate('Register')}</SignMessageByttonTextBold>

       </SignMessageButton>
    </Container>
  );
}