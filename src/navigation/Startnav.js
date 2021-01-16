import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FABScreen from '../screens/FABScreen';
import LoginScreen from '../screens/LoginScreen';
import TransferOBU from '../screens/TransferOBU';
import ScanVehicle from '../screens/ScanVehicle';
import EndScreen from '../screens/EndScreen';
import Load from '../screens/Load';
import Driver from '../screens/Driver';
import AnimationScreen from '../screens/AnimationScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

function StartNavigation(props) {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
                <Stack.Screen name="TransferOBU" component={TransferOBU} />
                <Stack.Screen name="FABScreen" component={FABScreen} />
                <Stack.Screen name="Driver" component={Driver} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="ScanVehicle" component={ScanVehicle} />
                <Stack.Screen name="EndScreen" component={EndScreen} />
                <Stack.Screen name="Load" component={Load} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default StartNavigation;

