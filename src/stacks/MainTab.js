import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Flights from '../screens/Flights';
import MyFlights from '../screens/MyFlights';
import Home from '../screens/Home';
import CustomTabBar from '../components/ComponentTabBar';

import RoutesName from '../constants/routes';
import { CustomButtonText } from '../components/CommonStyledComponents';

const Tab= createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      tabBar={props=><CustomTabBar {...props} />}
      initialRouteName={RoutesName.MY_FLIGHTS}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen name={RoutesName.MY_FLIGHTS} component={MyFlights} />
      <Tab.Screen name={RoutesName.HOME} component={Home} />
      <Tab.Screen name={RoutesName.FLIGHTS} component={Flights} />
    </Tab.Navigator>
  );
}