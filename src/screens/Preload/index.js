import React, { useEffect } from 'react';
import { Container } from '../../components/CommonStyledComponents';
import { LoadingIcon } from './style';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../../api/Api';
import RoutesName from '../../constants/routes';
import FSEconomyLogo from '../../assets/images/FSEconomyLogo.svg'

export default ({navigation}) => {

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
      if(token){
        let res = {token: 'aa'};//await Api.checkToken(token);
        if(res.token){
          AsyncStorage.setItem('token', res.token);
          navigation.reset({routes: [{name: RoutesName.MAIN_TAB}]});
        } else {
          navigation.navigate(RoutesName.SIGN_IN);
        }
      } else {
        navigation.navigate(RoutesName.SIGN_IN);
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <FSEconomyLogo width="100%" height="160"/>
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
}