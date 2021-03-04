import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MainTab from './MainTab';
import FlightDetails from '../screens/FlightDetails';
import FlightSearchDetails from '../screens/FlightSearchDetails';

import RoutesName from '../constants/routes';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={RoutesName.PRELOAD} component={Preload} />
      <Stack.Screen name={RoutesName.SIGN_IN} component={SignIn} />
      <Stack.Screen name={RoutesName.SIGN_UP} component={SignUp} />
      <Stack.Screen name={RoutesName.MAIN_TAB} component={MainTab} />
      <Stack.Screen name={RoutesName.FLIGHT_DETAILS} component={FlightDetails} />
      <Stack.Screen name={RoutesName.FLIGHT_SEARCH_DETAILS} component={FlightSearchDetails} />
    </Stack.Navigator>
  );
}