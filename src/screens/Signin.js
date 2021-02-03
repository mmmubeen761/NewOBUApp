import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switc } from 'react-native-paper';
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';



GoogleSignin.configure({
    webClientId: '672887915725-k2putqmqnqrbt8ikh33cmp5qg2ncn1sp.apps.googleusercontent.com',
});



async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}




const SignIn = (props) => {

    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();

        if(isSignedIn){
            props.navigation.navigate('Navigation')
        }

    };
    isSignedIn()



    return (
        <>
            <ScrollView style={{ backgroundColor: '#fff', paddingTop: 50 }}>
                <View style={styles.container}>
                    <View style={styles.logincontainer}>
                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row' }}>
                                <Avatar.Image
                                    source={require('../images/signin.png')}
                                    size={200}
                                />
                            </View>
                        </View>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user"
                                color="#b50000"
                                size={25}
                            />
                            <TextInput
                                placeholder="Your Username"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => textInputChange(val)}
                            />
                        </View>

                        <View style={styles.action}>
                            <FontAwesome
                                name="lock"
                                color="#b50000"
                                size={25}
                            />
                            <TextInput
                                placeholder="Your Password"
                                placeholderTextColor="black"
                                secureTextEntry={true}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => handlePasswordChange(val)}
                            />
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => alert('use google sign in')}
                                style={styles.signIn}
                            >
                                <LinearGradient
                                    colors={['#fc7979', '#ff2414']}
                                    style={styles.signIn}
                                >
                                    <Text style={[styles.textSign, {
                                        color: '#fff', fontSize: 20, fontWeight: 'bold', letterSpacing: 1
                                    }]}>Log In</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center', flexDirection: 'row', paddingTop: 10
                        }}>
                            <Text style={{ flex: 2, textAlign: 'left', padding: 5 }}>Forgot Password?</Text>
                            <Text style={{ flex: 2, textAlign: 'right', paddingRight: 5 }}>New User?</Text>
                            <Text style={{ paddingRight: 10, color: 'red', fontWeight: 'bold' }} onPress={() => props.navigation.navigate('SignUp')}>Sign Up</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#737373', marginTop: 50 }}>You can also log in with:</Text>
                        </View>
                        <View style={styles.buttonn}>
                            <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5} 
                              onPress={() => onGoogleButtonPress().then(() => props.navigation.navigate('Half'))}
                              >

                                <Image
                                    source={require('../images/google.png')}
                                    style={styles.ImageIconStyle}
                                />

                                <View style={styles.SeparatorLine} />

                                <Text style={styles.TextStyle}> Login Using Google </Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%'
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
      },
      
      GooglePlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e6695e',
        borderWidth: .5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5 ,
        margin: 5,
      
     },
      
     FacebookStyle: {
       flexDirection: 'row',
       alignItems: 'center',
       backgroundColor: '#485a96',
       borderWidth: .5,
       borderColor: '#fff',
       height: 40,
       borderRadius: 5 ,
       margin: 5,
      
     },
      
     ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
      
     },
      
     TextStyle :{
      
       color: "#fff",
       marginBottom : 4,
       marginRight :20,
       
     },
      
     SeparatorLine :{
      
     backgroundColor : '#fff',
     width: 1,
     height: 40
      
     },
    logincontainer: {
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    textWrapper: {
        backgroundColor: 'black',
        height: hp('100%'), // 70% of height device screen
        width: wp('100%'),   // 80% of width device screen
    },
    myText: {
        fontSize: hp('5%') // End result looks like the provided UI mockup
    }, userInfoSection: {
        paddingLeft: 20,
    },
    action: {
        width: ('80%'),   // 80% of width device screen
        flexDirection: 'row',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 5,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'black',
    },
    button: {
        marginTop: 10,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    },
    buttonn: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        fontWeight: 'bold',
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        fontWeight: 'bold',
    }, actio: {
        width: ('100%'),   // 80% of width device screen
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5486eb',
        paddingBottom: 18,

    },
    textInpu: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#fff',
        fontSize: hp('2.5%'),
        paddingTop: 10,
        paddingLeft: 20,
        fontWeight: 'bold'
    },
});
