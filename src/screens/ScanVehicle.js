import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar, Image, SafeAreaView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const theme = {
    roundness: 2,
    backgroundColor: {
        primary: '#8d0000',
        accent: '#8d0000',
    },
};

const ScanVehicle = (props) => {

    return (
        <>

            <View style={styles.container}>
                <View style={styles.actions}>
                    <Image source={require('../images/menu.png')} />
                    <Text style={{  color: '#fff', fontSize: 24, fontFamily: 'System', textAlign:'center',width:'80%'}}>Lorem Ipsum</Text>
                </View>
            </View>
            <ScrollView>

                <SafeAreaView>
                    <View style={styles.containers}>
                        <View style={styles.actio}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'System', padding: 15, textAlign: 'center', paddingBottom: 85 }}>
                                    Scan new vehicle licence plate
                </Text>
                            </View>
                            <View>
                                <View style={{ justifyContent: 'center', }}>
                                    <Image
                                        style={{ resizeMode: 'contain', width: '80%', alignSelf: 'center' }}
                                        source={require('../images/Scan.png')}
                                        size={200}
                                    />
                                </View>
                            </View>
                        </View>

                    </View>
                </SafeAreaView>
            </ScrollView>
            <View >
                <Text style={styles.acti} onPress={()=> props.navigation.navigate('TransferOBU')} className="btn"><Image source={require('../images/scann.png')} /></Text>
            </View>
            <View>
                <Text style={styles.act} className="btn"><Image source={require('../images/pencil.png')} /></Text>
            </View>
        </>
    );
};

export default ScanVehicle;

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
    }, acti: {
        width: ('11%'),
        paddingBottom: 14,
        paddingTop: 8,
        paddingLeft: 12,
        // paddingRight: 5,
        // borderTopLeftRadius: 50,
        // borderBottomRightRadius: 50,
        // borderBottomLeftRadius: 50,
        // borderTopRightRadius: 50,
        backgroundColor: '#c60017',
        color: 'white',
        position: 'absolute',
        bottom: 10,
        zIndex: 22,
        alignSelf: 'center',
        borderRadius:50
    },
    act: {
        width: ('11%'),
        paddingBottom: 14,
        paddingTop: 8,
        paddingLeft: 12,
        // paddingRight: 5,
        // borderTopLeftRadius: 50,
        // borderBottomRightRadius: 50,
        // borderBottomLeftRadius: 50,
        // borderTopRightRadius: 50,
        backgroundColor: 'gray',
        color: 'white',
        position: 'absolute',
        bottom: 10,
        right: 10,
        zIndex: 22,
        alignSelf: "flex-end",
        borderRadius:50
    },
});
