import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/FacebookSignin';
import Activity from '../screens/Activity';
import Swap from '../screens/Swap';
import Send from '../screens/Send';
import Receive from '../screens/Recieve';
import {Image} from 'react-native'


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const Dashboard = () => (

  <Tab.Navigator
    initialRouteName="HomeScreen"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Connect"
      component={Activity}
      options={{
        tabBarLabel: 'Connect',
        tabBarColor: '#b00210',
        tabBarIcon: ({ color }) => (
         <Image source={require('../images/co.png')}/>
        ),
      }}
    />
    <Tab.Screen
      name="Nearby"
      component={Swap}
      options={{
        tabBarLabel: 'Nearby',
        tabBarColor: '#b00210',
        tabBarIcon: ({ color }) => (
          <Image source={require('../images/pin.png')}/>
          ),
      }}
    />
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#b00210',
        tabBarIcon: ({ color }) => (
          <Image source={require('../images/ho.png')} />
          ),
      }}
    />
    <Tab.Screen
      name="Team"
      component={Send}
      options={{
        tabBarLabel: 'Team',
        tabBarColor: '#b00210',
        tabBarIcon: ({ color }) => (
          <Image source={require('../images/heart.png')}/>
          ),
      }}

    />
    <Tab.Screen
      name="History"
      component={Receive}
      options={{
        tabBarLabel: 'History',
        tabBarColor: '#b00210',
        tabBarIcon: ({ color }) => (
          <Image source={require('../images/met.png')}/>
          ),
      }}

    />
  </Tab.Navigator>
);

export default Dashboard;
