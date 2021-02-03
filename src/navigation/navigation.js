import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard';   //waste code 
import BuyCripto from '../screens/Buycripto';   //waste code 
import Backup from '../screens/BackupFund';     //waste code 
import Address from '../screens/Address';       //waste code  
import Goods from '../screens/Goodslink';       //waste code 
import Services from '../screens/Serviceslink';  //waste code   
import Settings from '../screens/Setting';    //waste code  
import Support from '../screens/Support';       //waste code  
import Logout from '../screens/Logout';       //waste code 
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerContent} from './DrawerCont'  
import SignIn from '../screens/Signin'   //waste code 
import SignUp from '../screens/Signup'      //waste code 
import StartNavigation from './Startnav';    //waste code 

const Drawer = createDrawerNavigator();

export default function Navigation(props) {
  return (
     
      <Drawer.Navigator initialRouteName="Dashboard" drawerContent={props => <DrawerContent {...props}/> }>
        <Drawer.Screen name="Home" component={Dashboard} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="home"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="Activity" component={BuyCripto} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="shopping-cart"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="History" component={Backup} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="home"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="Address" component={Address} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="map-marker"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="Goods Link" component={Goods} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="shopping-bag"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="Services Link" component={Services} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="cogs"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="Support" component={Support} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="question-circle"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="Settings" component={Settings} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="cog"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="StartNavigation" component={Dashboard} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="sign-out"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
          <Drawer.Screen name="SignIn" component={SignIn} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="sign-out"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
          <Drawer.Screen name="SignUp" component={SignUp} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="sign-out"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
      </Drawer.Navigator>
  );
}





