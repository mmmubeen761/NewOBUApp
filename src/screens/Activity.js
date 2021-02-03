import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, Dimensions, TextInput, Platform, StyleSheet, ScrollView, StatusBar, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { GoogleSignin } from '@react-native-community/google-signin';

const Activity = (props) => {

    const[userr,setUser] = useState([])

    const getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();
        setUser(currentUser.user);
      };

      getCurrentUser()

    //   {"idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImVlYTFiMWY0MjgwN2E4Y2MxMzZh
    // MDNhM2MxNmQyOWRiODI5NmRhZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI2NzI4ODc5MTU3MjUtamExNzRocDZvbm9qN3ZiZ29mZWw2cTIwOHVkdmRraDguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2NzI4ODc5MTU3MjUtazJwdXRxbXFucXJidDhpa2gzM2NtcDVxZzJuY24xc3AuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDIzMTE5NjQyMjU2MjI2MDE5MTciLCJlbWFpbCI6Im1tbXViZWVuNzYxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiTWFsaWsgTXViZWVuIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdnc1lvZGZsNGhCLXdiUmt2dlJESl9oQjZMY1ZhZElKaDlGUmdHOFB3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ik1hbGlrIiwiZmFtaWx5X25hbWUiOiJNdWJlZW4iLCJsb2NhbGUiOiJlbiIsImlhdCI6MTYxMTk1MjA4OSwiZXhwIjoxNjExOTU1Njg5fQ.IUA_kixnCLMiWZzIeCxFiPnGX8QinZpHqaVVNG3_xOei9eZdlLjSGopF
    // -ZYvOOyl1q7m2DvZJNKB7nQ518eLoEZH8vttOcXbluXgkUqIMoxKYQ-LSHAe4E9kia3iNFAZrX3Uol3GJPdXrHMFbE3AW1PO0LFGVIjHey4L1nRte-ddY9OUxuA9jlaUo7IThBLzqO_2qrLI2vQcxQFQV_fSKfpdCYWrmXaZdkeruo8Xj97DdSxRYfOsCtAxNWKb0wSVbn2Xaac-WNZM2Ue2Oaw8A3pEXjEs89
    // -fW51wHK64Aohr5-rNMVCloup4vaqVPY6bCgeUlaJND1wIbSlFNnNHEg",
    //  "scopes": ["https://www.googleapis.com/auth/userinfo.profile",
    //  "https://www.googleapis.com/auth/userinfo.email"],
    //  "serverAuthCode": null,
    //  "user": {"email": "mmmubeen761@gmail.com", "familyName": "Mubeen", "givenName": "Malik", "
    // id": "102311964225622601917", "name": "Malik Mubeen",
    //  "photo": "https://lh3.googleusercontent.com/a-/AOh14GgsYodfl4hB-wbRkvvRDJ_hB6LcVadIJh9FRgG8Pw=s96-c"}}

    return (
        <>
            <View style={styles.action}   >
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>

                    <Image source={require('../images/menu.png')}

                    />
                </TouchableOpacity>
                <Text style={styles.textInput}>My Profile</Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Image style={styles.header} source={{uri : 'https://image.shutterstock.com/image-vector/cute-cartoon-blood-drop-holding-260nw-1131075320.jpg'}}/>
                </View>
                <Image style={styles.avatar} source={{ uri: userr.photo }} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>{userr.name}</Text>
                        <Text style={styles.info}>{userr.email}</Text>
                        <Text style={styles.description}>Blood donation is safe for healthy adults. There's no risk of contracting disease. New, sterile equipment is used for each donor.</Text>

                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={{color:'white'}}>Share Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Activity;

const styles = StyleSheet.create({
    header: {
        // backgroundColor: "#ff3042",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#ff3042",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 30,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#ff3042",
        color: '#fff',

    },  action: {
        width: ('100%'),   // 80% of width device screen
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b00210',
        paddingBottom: 18,

    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#fff',
        fontSize: hp('2.5%'),
        paddingTop: 10,
        paddingLeft: 20,
        fontWeight: 'bold'
    },
});