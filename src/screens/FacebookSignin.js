import React, { useState, useEffect } from 'react';
import {
    View, Text, TouchableHighlight, Dimensions,TouchableOpacity, Image, TextInput, Platform, StyleSheet, ScrollView, Alert, Modal, StatusBar,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Card, ListItem, Button } from 'react-native-elements'
import { Avatar } from 'react-native-paper'
import database from '@react-native-firebase/database'



const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Home = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    const [data, setData] = useState([])


    useEffect(() => {

        database()
            .ref('/').child('blooddonor')
            .on('value', snapshot => {
                if (snapshot.val() !== null)
                    setData({
                        ...snapshot.val()
                    })
            });

    }, [])

    return (
        <>
            <View style={styles.action}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>

<Image source={require('../images/menu.png')}
   
   />
   </TouchableOpacity>
                <Text style={styles.textInput}>REQUEST BLOOD</Text>
            </View>
            <ScrollView>

                <View style={styles.textWrapper}>
                    <View style={styles.logincontainer}>
                        {Object.keys(data).map((val, id) => {
                            return (
                                <>

                                    <View style={{ width: '100%', alignSelf: 'center' }}>
                                        <Card>
                                            <View style={{flex:1,flexDirection:'row'}}>

                                                <Avatar.Image
                                                    source={require('../images/userr.png')}
                                                    size={60}
                                                />
                                                <Card.Title style={{ fontSize: 20, color: 'black', alignSelf: 'flex-start', paddingLeft: 10, paddingTop:20 }}>
                                                    {data[val].username}  ({data[val].bloodgroup})</Card.Title>
                                            </View>
                                            <Text style={{ marginBottom: 10 }}>is {data[val].request} for blood</Text>
                                            <Card.Divider />
                                            <Card.Image source={{uri:'data:image/jpeg;base64,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'}}>
                                            </Card.Image>

                                            <View style={{
                                                width: '80%',
                                                flexDirection: 'row'
                                            }}>
                                                <View >
                                                    <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Mobile : </Text>
                                                </View>
                                                <View>
                                                    <Text style={{ marginBottom: 10 }}>{data[val].contact}</Text>
                                                </View>
                                            </View>
                                            <View style={{
                                                width: '80%',
                                                flexDirection: 'row'
                                            }}>
                                                <View >
                                                    <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Address : </Text>
                                                </View>
                                                <View>
                                                    <Text style={{ marginBottom: 10 }}>{data[val].address}</Text>
                                                </View>
                                            </View>
                                            <View style={{
                                                width: '80%',
                                                flexDirection: 'row'
                                            }}>
                                                <View >
                                                    <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Message : </Text>
                                                </View>
                                                <View>
                                                    <Text style={{ marginBottom: 10 }}>{data[val].message}</Text>
                                                </View>
                                            </View>
                                            <Button onPress={() => {
                                                setModalVisible(true);
                                            }}
                                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginTop: 10, backgroundColor:'#ff3042' }}
                                            title={`YES, I OPT TO ${data[val].req}`} />
                                        </Card>
                                    </View>
                                </>
                            )
                        })}
                    </View>

                </View>
            </ScrollView>
            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View>
                                <Text style={{ fontSize: 26, fontFamily: 'Roboto', padding: 15, paddingTop: 20, fontWeight: 'bold', textAlign: 'center' }}>
                                    That's very generous !
                       </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 14, fontFamily: 'Roboto', padding: 10, paddingTop: 1 }}>
                                    You have opted to donate/request blood                        </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 14, fontFamily: 'Roboto', padding: 10, paddingTop: 1 }}>
                                    Please confirm below to proceed with your noble cause.                      </Text>
                            </View>

                            <View style={styles.btn}>
                                <TouchableHighlight style={{ ...styles.openButton, backgroundColor: "#858585", flex: 1 }}
                                    onPress={() => { setModalVisible(!modalVisible); }} >
                                    <Text style={styles.textStyle}>No, i'll do later</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={{ ...styles.openButton, backgroundColor: "#c60017", flex: 1, textAlign: 'center' }}>
                                    <Text style={styles.textStyle} onPress={() => {alert('Your request is in pending... we will email you soon'), setModalVisible(!modalVisible)}}>Confirm</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    );
};

export default Home;

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
        height: '100%'
    },
    textWrapper: {
        backgroundColor: '#fff',
        height: ('100%'), // 70% of height device screen
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
    }, centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        margin: 1
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }, btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10
    }
});
