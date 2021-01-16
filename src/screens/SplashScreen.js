import React, { useState } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const SplashScreeen = (props) => {

    
  setTimeout(() => {
     props.navigation.navigate('AnimationScreen') 
  }, 3000);



    return (
        <>
        <View style={{backgroundColor:'#c60017',width:'100%',height:'100%'}}>

        </View>
        </>
    );
};

export default SplashScreeen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8d0000',
        color: '#fff',

    },
    containers: {
        color: '#fff',
        height: hp('100'),
    },
    textWrapper: {
        backgroundColor: '#4267B2',
        height: hp('100'),
        width: wp('100%'),
    },
    myText: {
        fontSize: hp('5%')
    },
    actions: {
        width: ('100%'),
        flexDirection: 'row',
        marginTop: 15,
        paddingLeft: 15,
        paddingBottom: 15,
        color: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
