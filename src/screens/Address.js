import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions, TextInput, Platform, StyleSheet, ScrollView, StatusBar, Linking } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';


function loadInBrowser() {
    Linking.openURL("https://wallet.bitcoin.com/").catch(err => console.error("Couldn't load page", err));
};

const Address = (props) => {

    return (
        <>
                <View style={styles.action}>
                    <Icon name="bars" size={20} color="#fff"
                        onPress={() => props.navigation.openDrawer()}
                    />
                    <Text style={styles.textInput}>Recieve</Text>
                </View>
            <ScrollView>

                <View style={styles.textWrapper}>
                    <View style={styles.logincontainer}>
                        <View style={styles.actions}>
                            <Icon name="bitcoin" color={'#ffa200'} size={26} />
                            <Text style={{
                                color: 'black', flex: 1,
                                paddingLeft: 10,
                                fontSize: hp('2.4%'),
                            }}>Bitcoin</Text>

                        </View>
                        <View style={styles.actions}>
                            <Icon name="dollar-sign" color={'#00cc22'} size={26} />
                            <Text style={styles.textInputs}>My Bitcoin Wallet {"\n"}$ 0.00 0BTC </Text>
                        </View>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={loadInBrowser}
                        >
                            <LinearGradient
                                colors={['#008fb3', '#5486eb']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff',
                                }]}>Check Wallet</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </>
    );
};

export default Address;

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
        backgroundColor: '#009387',
        paddingBottom: 18,

    },
    textInput: {
        flex: 1,
        fontSize: hp('2.5%'),
        paddingTop: 10,
        paddingLeft: 20,
        color: '#fff',
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        fontWeight: 'bold'
    },
    actions: {
        width: ('100%'),   // 80% of width device screen
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5',
        paddingBottom: 5,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
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
