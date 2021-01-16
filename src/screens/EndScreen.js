import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar, Image, SafeAreaView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const EndScreen = () => {


    return (
        <>
            <ScrollView>

                <SafeAreaView>
                    <View style={styles.containers}>
                        <View style={styles.actio}>
                            <View>
                                <Text style={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'System', paddingTop: '20%', textAlign: 'center' }}>
                                    Transfer an Onboard Unit
                </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, fontFamily: 'System', paddingBottom: 85, paddingTop: 20, textAlign: 'center' }}>
                                    Onboard Unit is transferred from vehicle K SC 2275 D OA 701
                 </Text>
                            </View>
                            <View>
                                <View style={{ justifyContent: 'center', }}>
                                    <Image
                                        style={{ resizeMode: 'contain', width: '80%', alignSelf: 'center' }}
                                        source={require('../images/DoneIcon.png')}
                                        size={200}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, fontFamily: 'System', padding: 15, paddingTop: 70, textAlign: 'center' }}>
                                    You will receive an email in a while
                </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, fontFamily: 'System', color: 'black', textAlign: 'center' }}>
                                    <Text style={{ fontSize: 16, fontFamily: 'System', padding: 15, paddingTop: 10, color: 'red' }}>
                                        Please note:
                         </Text>
                                The license plate change can take upto 3 workin days. During this time you can not use the mautbox in any vehicle
                         </Text>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
};

export default EndScreen;

const styles = StyleSheet.create({
    containers: {
        color: '#fff',
        height: hp('100'), // 70% of height device screen
    },
});
