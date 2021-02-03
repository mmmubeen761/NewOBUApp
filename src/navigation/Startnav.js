import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './navigation';
import MainScreen from '../screens/MainScreen';
import SignUp from '../screens/Signup';
import SignIn from '../screens/Signin'
import Half from '../screens/Half'
import DonateBlood from '../screens/DonateBlood'
import RequestBlood from '../screens/RequestBlood'

const Stack = createStackNavigator();

function StartNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Half" component={Half} />
                <Stack.Screen name="DonateBlood" component={DonateBlood} />
                <Stack.Screen name="RequestBlood" component={RequestBlood} />
            <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="Navigation" component={Navigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default StartNavigation;

