import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

import MyFlightsIcon from '../assets/images/travelling.svg';
import FlightsIcon from '../assets/images/travel.svg';
import AirportIcon from '../assets/images/airport.svg';
import HomeIcon from '../assets/images/home.svg';

import RoutesName from '../constants/routes';
import { translate } from '../locales'

const TabArea = styled.View`
  height: 70px;
  background-color: #FFFFFF;
  flex-direction: row;
  padding: 10px;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #4EADBE;
  border-radius: 50px;
  border: 3px solid #FFFFFF;
  margin-top: -20px;
`;

const TabItemText = styled.Text`
  font-size: 12px;
  padding-top: 5px;
  color: gray;
`;

export default ({state, navigation}) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  }
  return (
    <TabArea>
      <TabItem onPress={() => goTo(RoutesName.MY_FLIGHTS)}>
        <MyFlightsIcon width="24" height="24"/>
        <TabItemText style={{color: state.index === 0 ? 'tomato' : 'gray'}}>{translate('MyFlights')}</TabItemText>
      </TabItem>
      <TabItemCenter onPress={() => goTo(RoutesName.HOME)}>
        <HomeIcon style={{opacity: state.index === 1 ? 0.8 : 1}} width="40" height="40" fill="#FFFFFF"/>
      </TabItemCenter>
      <TabItem onPress={() => goTo(RoutesName.FLIGHTS)}>
        <AirportIcon width="24" height="24"/>
        <TabItemText style={{color: state.index === 2 ? 'tomato' : 'gray'}}>{translate('Flights')}</TabItemText>
      </TabItem>
    </TabArea>
  );
}