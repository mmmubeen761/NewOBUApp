import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions, TextInput, Platform, StyleSheet, ScrollView, StatusBar, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const FacebookSetting = (props) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }


    return (
        <>
            {/* <View style={styles.container}>
                <Text style={styles.facebookicon}>facebook</Text>
            </View> */}
            <ScrollView>

                <View style={styles.textWrapper}>
                    <View style={styles.logincontainer}>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user"
                                color="#42afed"
                                size={20}
                                style={{ paddingLeft: 20 }}
                            />
                            <Text style={styles.textInput}>Freinds</Text>
                        </View>
                        <View style={styles.action}>
                            <FontAwesome
                                name="group"
                                color="#0a9ac9"
                                size={20}
                                style={{ paddingLeft: 20 }}
                            />
                            <Text style={styles.textInput}>Groups</Text>
                        </View>
                        <View style={styles.action}>
                            <FontAwesome
                                name="step-backward"
                                color="#3c8aa3"
                                size={20}
                                style={{ paddingLeft: 20 }}
                            />
                            <Text style={styles.textInput}>Videos on watch</Text>
                        </View>
                        <View style={styles.action}>
                            <FontAwesome
                                name="reply"
                                color="#056685"
                                size={20}
                                style={{ paddingLeft: 20 }}
                            />
                            <Text style={styles.textInput}>Memories</Text>
                        </View>
                        <View style={styles.action}>
                            <FontAwesome
                                name="tag"
                                color="#740be3"
                                size={20}
                                style={{ paddingLeft: 20 }}
                            />
                            <Text style={styles.textInput}>Saved</Text>
                        </View>
                        <View style={styles.action}>
                            <FontAwesome
                                name="flag"
                                color="#ff9d00"
                                size={20}
                                style={{ paddingLeft: 20 }}
                            />
                            <Text style={styles.textInput}>Pages</Text>
                        </View>
                        <View style={styles.action}>
                            <FontAwesome
                                name="calendar"
                                color="#f5273c"
                                size={20}
                                style={{ paddingLeft: 20 }}
                            />
                            <Text style={styles.textInput}>Event</Text>
                        </View>
                        <View style={styles.action}>
                            <FontAwesome
                                name="gamepad"
                                color="#0e42eb"
                                size={20}
                                style={{ paddingLeft: 20 }}
                            />
                            <Text style={styles.textInput}>Gaming</Text>
                        </View>
                        <View style={styles.action}>
                            <FontAwesome
                                name="suitcase"
                                color="#de8500"
                                size={20}
                                style={{ paddingLeft: 20 }}
                            />
                            <Text style={styles.textInput}>Jobs</Text>
                        </View>
                        <View style={styles.list}>
                            <FontAwesome
                                name="angle-right"
                                color="#808080"
                                size={20}
                                style={{ paddingLeft: 20 }}
                            />
                            <Text style={styles.textInput}>See More</Text>
                        </View>
                        <View style={styles.list}>
                            <FontAwesome
                                name="question-circle"
                                color="#808080"
                                size={20}
                                style={{ paddingLeft: 20 }}
                            />
                            <Text style={styles.textInput}>Help & Support</Text>
                        </View>
                        <View style={styles.list}>
                            <FontAwesome
                                name="sliders"
                                color="#808080"
                                size={20}
                                style={{ paddingLeft: 20 }}
                            />
                            <Text style={styles.textInput}>Settings & Privacy</Text>
                        </View>
                        <View style={styles.list}>
                            <FontAwesome
                                name="sign-out"
                                color="#808080"
                                size={20}
                                style={{ paddingLeft: 20 }}
                            />
                            <Text style={styles.textInput}>Log Out</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </>
    );
};

export default FacebookSetting;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        color: '#fff',
        // height: '100%'
    },
    facebookicon: {
        color: '#4267B2',
        fontFamily: 'Roboto',
        fontSize: hp('3%'),
        fontWeight: 'bold',
        backgroundColor: '#f2f2f2',

    },
    logincontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: wp('10'),
        color: 'black',
    },
    textWrapper: {
        // height: hp('100'), // 70% of height device screen
        backgroundColor: '#f2f2f2',
        width: wp('100%'),   // 80% of width device screen
    },
    myText: {
        fontSize: hp('5%') // End result looks like the provided UI mockup
    },
    action: {
        width: ('90%'),
        flexDirection: 'row',
        paddingBottom: 15,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: '#fff',
        borderWidth: 10,
        borderRadius: 20,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 7,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    list: {
        width: ('100%'),
        height: ('auto'),
        flexDirection: 'row',
        paddingBottom: 15,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 10,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 7,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 1,
        backgroundColor: '#fff',
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: 'black',
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
