import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TextInput, Platform, StyleSheet, ScrollView, StatusBar, Linking } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'


const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
]

function loadInBrowser() {
    Linking.openURL("https://100stylez.com/").catch(err => console.error("Couldn't load page", err));
};
function loadInBrowse() {
    Linking.openURL("http://100foodies.com/").catch(err => console.error("Couldn't load page", err));
};

const Goods = (props) => {

    return (
        <>

            <View style={styles.action}>
                <Icon name="bars" size={20} color="#fff"
                    onPress={() => props.navigation.openDrawer()}
                />
                <Text style={styles.textInput}>Goods Link</Text>
            </View>
            <ScrollView>

                <Card>
                    <Card.Title style={{ fontSize: hp('5%'), color: '#ff00d0' }}>100 Stylez</Card.Title>
                    <Card.Divider />
                    <Card.Image source={require('./logo.jpg')}>
                    </Card.Image>
                    <Button
                        onPress={loadInBrowser}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginTop: 10 }}
                        title='VISIT WEBSITE' />
                </Card>
                <Card>
                    <Card.Title style={{ fontSize: hp('5%'), color: '#963c00' }}>100 Foodies</Card.Title>
                    <Card.Divider />
                    <Card.Image source={require('./logo.jpg')}>
                    </Card.Image>
                    <Button
                        onPress={loadInBrowse}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginTop: 10 }}
                        title='VISIT WEBSITE' />
                </Card>
                <View style={styles.textWrapper}>
                </View>
                <View style={styles.textWrapper}>
                </View>

            </ScrollView>

        </>
    );
};

export default Goods;

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
        backgroundColor: '#5486eb',
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
