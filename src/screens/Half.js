import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions, Image, TextInput, Platform, StyleSheet, ScrollView, StatusBar, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Half = (props) => {

    return (
        <>
            <ScrollView>

                <View style={styles.textWrapper}>
                   
                    <View style={styles.logincontainer}>

                        <View style={{ backgroundColor: '#b00210', height: '50%' }} >
                            <Image source={require('../images/do.png')} style={{ resizeMode: 'center', height: 250, }} />
                            <Text onPress={() => props.navigation.navigate('DonateBlood')} style={{ padding: 0, margin: 0, textAlign: 'center', fontSize: 20, color: 'white', fontWeight: 'bold' }}>DONATE BLOOD</Text>
                            <Text onPress={() => props.navigation.navigate('DonateBlood')} style={{ padding: 0, margin: 0, textAlign: 'center', fontSize: 15, color: 'white', }}>TAP HERE TO DONATE FOR BLOOD</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', height: '50%' }} >
                            <Image source={require('../images/blood.png')} style={{ resizeMode: 'center', height: 250, }} />
                            <Text onPress={() => props.navigation.navigate('RequestBlood')} style={{ padding: 0, margin: 0, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>REQUEST BLOOD</Text>
                            <Text onPress={() => props.navigation.navigate('RequestBlood')} style={{ padding: 0, margin: 0, textAlign: 'center', fontSize: 15, }}>TAP HERE TO REQUEST FOR BLOOD</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </>
    );
};

export default Half;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%'
    },
    logincontainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: wp('10'),
        color: 'black',
    },
    textWrapper: {
        backgroundColor: '#fff',
        height: hp('100'), // 70% of height device screen
        width: wp('100%'),   // 80% of width device screen
    },
    myText: {
        fontSize: hp('5%') // End result looks like the provided UI mockup
    },
    action: {
        width: ('100%'),   // 80% of width device screen
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingBottom: 18,

    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#fff',
        fontSize: hp('2.5%'),
        paddingTop: 10,
        paddingLeft: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    actions: {
        width: ('100%'),   // 80% of width device screen
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        paddingBottom: 5,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingBottom: 10,

    },
    textInputs: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'black',
        fontSize: hp('3%'),
        paddingTop: 5,
        paddingLeft: 10,
        // color:'#008fb3'
        // paddingBottom: 10,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
});
