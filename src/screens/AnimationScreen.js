import React, { useState, useMemo, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar, Image, SafeAreaView, ImageBackground, Animated
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const AnimationScreen = (props) => {


    const [count, setCount] = useState(0);
   
    function countAdd() {
        setCount(count + 1)

    }

    const positionCloud = new Animated.ValueXY({ x: -250, y: 0 })
    const positionTruck = new Animated.ValueXY({ x: -100, y: -15 })

    const positionCloud1 = new Animated.ValueXY({ x: -350, y: 0 })
    const positionTruck1 = new Animated.ValueXY({ x: -250, y: 120 })




    function animateCloud() {
        Animated.timing(positionCloud, {
            toValue: { x: -350, y: 0 },
            duration: 600,
            useNativeDriver: true,
        }
        ).start()

        Animated.timing(positionTruck, {
            toValue: { x: -250, y: 120 },
            duration: 600,
            useNativeDriver: true,
        }
        ).start()
    }


    function animateCloud2() {
        Animated.timing(positionCloud1, {
            toValue: { x: -450, y: 0 },
            duration: 600,
            useNativeDriver: true,
        }
        ).start()

        Animated.timing(positionTruck1, {
            toValue: { x: -270, y: 550 },
            duration: 600,
            useNativeDriver: true,
        }
        ).start()
    }


    if (count === 1) {
        animateCloud()
    }

    else if (count === 2) {
        animateCloud2()

    } else if (count === 3) {
        props.navigation.navigate('FABScreen')
    }

    return (
        <>

            <SafeAreaView>
                <Text style={{ backgroundColor: '#fff', color: 'black', position: 'absolute', left: 20, top: 80, zIndex: 22, fontWeight: 'bold', fontSize: 17 }} onPress={() => props.navigation.navigate('FABScreen')}>Skip</Text>
                <ImageBackground source={require('../images/Obg.png')} style={{ width: '100%', height: '100%' }}>
                    {count == 1 ? <View style={{ backgroundColor: 'rgba(240, 240, 240,0.4)', position: 'absolute', bottom: '32%', margin: 50, alignSelf: "center", borderRadius: 10, paddingTop: 25, paddingBottom: 25, paddingLeft: 10, paddingRight: 10 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'System', paddingLeft: 30, paddingRight: 30, textAlign: 'center', color: 'red', opacity: 1, fontWeight: 'bold' }}>
                            Register Vehicle
                         </Text>
                        <Text style={{ fontSize: 16, fontFamily: 'System', textAlign: 'center', color: '#000000', opacity: 1, }}>
                            Register new vehicle any where and any time.
                         </Text>
                    </View> : count == 0 ? <View style={{ backgroundColor: 'rgba(240, 240, 240,0.4)', position: 'absolute', bottom: '32%', margin: 50, alignSelf: "center", borderRadius: 10, paddingTop: 25, paddingBottom: 25, paddingLeft: 10, paddingRight: 10 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'System', paddingLeft: 30, paddingRight: 30, textAlign: 'center', color: 'red', opacity: 1, fontWeight: 'bold' }}>
                            Manage OBU
                         </Text>
                        <Text style={{ fontSize: 16, fontFamily: 'System', textAlign: 'center', color: '#000000', opacity: 1, }}>
                            Manage your OBU using your app
                         </Text>
                        <Text style={{ fontSize: 16, fontFamily: 'System', textAlign: 'center', color: '#000000', opacity: 1, }}>
                            1. Login using EETS credentials {"\n"}
                                   2. Transfer OBU {"\n"}
                                   3. Register new vehicle
                         </Text>
                    </View> : count == 2 ?
                            <View style={{ backgroundColor: 'rgba(240, 240, 240,0.4)', position: 'absolute', bottom: '32%', margin: 50, alignSelf: "center", borderRadius: 10, paddingTop: 25, paddingBottom: 25, paddingLeft: 10, paddingRight: 10 }}>
                                <Text style={{ fontSize: 16, fontFamily: 'System', paddingLeft: 30, paddingRight: 30, textAlign: 'center', color: 'red', opacity: 1, fontWeight: 'bold' }}>
                                   Transfer OBU
                                  </Text>
                                <Text style={{ fontSize: 16, fontFamily: 'System', textAlign: 'center', color: '#000000', opacity: 1, }}>
                                   Transfer Onboard Unit from one vehicle to another in seconds
                                </Text>
                            </View>
                   : null }
                    <View >
                        <Animated.View style={{
                            height: 300,
                            width: 300,
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: [
                                { translateX: count === 2 ? positionCloud1.x : positionCloud.x },

                            ]
                        }} >
                            <Image
                                style={{ width: '300%', paddingTop: '10%', marginTop: '-75%', marginLeft: '260%' }}
                                source={require('../images/cloud.png')}
                                width='100%'
                                height='100%'
                            />
                        </Animated.View>
                    </View>
                    <View>
                        <Animated.View style={{
                            height: 300,
                            width: 300,
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: [
                                { translateX: count === 2 ? positionTruck1.x : positionTruck.x },
                                { translateY: count === 2 ? positionTruck1.y : positionTruck.y },

                            ]
                        }} >
                            <Image
                                style={{ resizeMode: 'contain', width: '100%', paddingTop: '50%', marginTop: '-285%', marginLeft: '185%' }}
                                source={require('../images/truck.png')}
                                width='100%'
                                height='100%'
                            />
                        </Animated.View>

                    </View>
                </ImageBackground>
            </SafeAreaView>
            <View>
                <Text style={styles.actio} onPress={countAdd} className="btn"><Image source={require('../images/arrow.png')} /></Text>
            </View>
            <View>
                <Text style={styles.actio1}></Text>
            </View>
            <View>
                <Text style={styles.actio2}></Text>
            </View>
        </>
    );
};

export default AnimationScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8d0000',
        color: '#fff',

    },
    containers: {
        height: hp('100'), // 70% of height device screen
    },
    logincontainer: {
        backgroundColor: '#4267B2',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: wp('10'),
        color: '#fff',
    },
    textWrapper: {
        backgroundColor: '#4267B2',
        height: hp('100'), // 70% of height device screen
        width: wp('100%'),   // 80% of width device screen
    },
    myText: {
        fontSize: hp('5%') // End result looks like the provided UI mockup
    },
    actions: {
        width: ('100%'),   // 80% of width device screen
        flexDirection: 'row',
        marginTop: 15,
        paddingLeft: 15,
        paddingBottom: 15,
        color: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 55,
        backgroundColor: 'gray'
    },
    textInput: {
    },
    action: {
        width: ('30%'),
        // flex: 1,
        // position: 'absolute',
        bottom: 50,
        alignSelf: 'flex-end',
        top: 140,
        right: 10,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        flexDirection: 'column',
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // borderTopLeftRadius: 50,
        // borderBottomRightRadius: 50,
        // borderBottomLeftRadius: 50,
        // borderTopRightRadius: 50,
        backgroundColor: '#c60017',
        color: 'white'
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
    image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center"
    }, actio: {
        width: ('16%'),
        paddingBottom: 25,
        paddingTop: 15,
        paddingLeft: 17,
        // paddingRight: 10,
        borderRadius:50,
        // borderTopLeftRadius: 50,
        // borderBottomRightRadius: 50,
        // borderBottomLeftRadius: 50,
        // borderTopRightRadius: 50,
        backgroundColor: '#c60017',
        color: 'white',
        position: 'absolute',
        right: 30,
        bottom: 10,
        zIndex: 22
    },
    actio1: {
        width: ('16%'),
        paddingBottom: 15,
        paddingTop: 22,
        paddingLeft: 17,
        paddingRight: 10,
        // borderTopLeftRadius: 50,
        // borderBottomRightRadius: 50,
        // borderBottomLeftRadius: 50,
        // borderTopRightRadius: 50,
        borderRadius:50,
        backgroundColor: '#c60017',
        color: '#c60017',
        position: 'absolute',
        right: 20,
        bottom: 10,
        opacity: .4,
        zIndex: 1
    },
    actio2: {
        width: ('16%'),
        paddingBottom: 15,
        paddingTop: 22,
        paddingLeft: 17,
        paddingRight: 10,
        // borderTopLeftRadius: 50,
        // borderBottomRightRadius: 50,
        // borderBottomLeftRadius: 50,
        // borderTopRightRadius: 50,
        borderRadius:50,
        backgroundColor: '#c60017',
        color: '#c60017',
        position: 'absolute',
        right: 10,
        bottom: 10,
        opacity: .2,
        zIndex: 1
    },

});
