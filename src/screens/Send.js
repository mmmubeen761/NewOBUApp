import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions, TextInput, Image, Platform, StyleSheet, ScrollView, StatusBar, Linking } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Provider, Portal, FAB } from 'react-native-paper';



function loadInBrowser() {
    Linking.openURL("https://www.bitcoin.com/get-started/how-do-i-easily-buy-and-sell-bitcoin/").catch(err => console.error("Couldn't load page", err));
};

const Send = (props) => {

    const [state, setState] = React.useState({ open: false });

    const { open } = state;
    const onStateChange = ({ open }) => setState({ open });

    return (
        <>
            <View style={styles.action}>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>

                    <Image source={require('../images/menu.png')}
                    />

                </TouchableOpacity>
                <Text style={styles.textInput}>My Teams</Text>
            </View>

            <View style={styles.textWrapper}>
                <View style={styles.logincontainer} >
                    <Image source={require('../images/b.png')} style={{ resizeMode: 'center', height: '40%', }} />
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Create your team
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, textAlign: 'center' }}>
                            Create your own blood donation team. Manage your volunteers and assign them tasks using this platform.
                        </Text>
                    </View>
                </View>
            </View>


            <Provider >
                <Portal>
                    <FAB.Group
                        fabStyle={{ backgroundColor: '#c60017' }}
                        style={styles.fab}
                        color="white"
                        open={open}
                        icon={open ? require('../images/cross.png') : require('../images/menu.png')}
                        // icon={open ? 'close' : 'menu'}
                        onStateChange={onStateChange}
                        actions={[
                            {
                                icon: require('../images/scann.png'),
                                onPress: () => alert('Something went wrong'),
                                label: "Scan QR",
                            },
                            {
                                icon: require('../images/pencil.png'),
                                onPress: () => alert('Something went wrong'),
                                label: "Create Team"
                            },
                        ]}
                    />
                </Portal>
            </Provider>

        </>
    );
};

export default Send;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        flex: 1,

    },
    logincontainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: wp('40'),
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
    textInpu: {
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: 'black',
        fontSize: hp('2%'),
        // paddingTop: 10,
        // paddingLeft: 20,
        fontWeight: 'bold',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actions: {
        width: ('100%'),   // 80% of width device screen
        flexDirection: 'row',
        paddingTop: 10,
        // paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
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
        // paddingLeft: 10,
        color: 'black',
        fontSize: hp('3%'),
        paddingTop: 5,
        // paddingLeft: 10,
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
