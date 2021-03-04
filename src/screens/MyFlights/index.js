import React, { useEffect, useContext } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Container } from '../../components/CommonStyledComponents';
import NoFlightsSelectedForProfile from '../../components/NoFlightSelectedForProfile'
import MyFlight from '../../components/MyFlight'


import Api from '../../api/Api';
import { UserContext } from '../../contexts/UserContext';
import { setFlights } from '../../reducers/UserReducer';

export default ({navigation}) => {

  const { state:user, dispach:userDispach} = useContext(UserContext);

  useEffect(() => {
    const findMyFlights = async () => {
      let token = await AsyncStorage.getItem('token');
      let res = await Api.getMyFlights(token);
      userDispach(setFlights(res.flights));
    }
    findMyFlights();
  }, []);

  return (
    <Container>
      {user.flights.length <= 0 ?
        <NoFlightsSelectedForProfile />
      :
        user.flights.map(
          (flight, idx) => <MyFlight key={{flight}, idx} data={flight} />
        )
      }
    </Container>
  );
}