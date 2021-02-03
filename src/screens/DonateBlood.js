import React, { useState } from 'react';
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
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switc } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import database from '@react-native-firebase/database'




const DonateBlood = (props) => {
    
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [gender,setGender] = useState('');
    const [bloodgroup,setBloodgroup] = useState('');
    const [contact,setContact] = useState('');
    const [address,setAdddress] = useState('');
    const [place,setPlace] = useState('');
    const [message,setMessage] = useState('');
    const [req,setReq] = useState('REQUEST');
    const [request,setRequest] = useState('Requesting');

    function sendData(){
        if(username === "" || email === "" || gender === "" || bloodgroup === "" || contact === "" || address === "" || place ===""){
            alert('Please fill all feilds!')
        }else{
            let data ={
                username,
                email,
                gender,
                bloodgroup,
                contact,
                address,
                place,
                message,
                req,
                request,
        
            }
            database().ref('/').child('blooddonor').push(data).then((res)=>{
                props.navigation.navigate('Navigation')
            })
    }
}

    const handleSelectBlood=(e)=>{
        setBloodgroup(e.value);
      }
      const handleSelectGender=(e)=>{
        setGender(e.value);
      }
      

    return (
        <>
            <ScrollView style={{ backgroundColor: '#fff' }}>
                <View style={styles.container}>
                    <View style={styles.logincontainer}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', paddingBottom: 10, paddingTop: 30 }}>Donate Blood</Text>
                        <Text style={{ color: '#8f8f8f', paddingBottom: 10 }}>Please enter your personal details below to proceed</Text>
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
                                onChangeText={(val) => setUsername(val)}
                            />
                        </View>

                        <View style={styles.action}>
                            <FontAwesome
                                name="envelope"
                                color="#b50000"
                                size={25}
                            />
                            <TextInput
                                placeholder="Your Email"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => setEmail(val)}
                            />
                        </View>
                        <View style={{ width: '80%', paddingTop: 10, paddingBottom: 10 }}>
                            <Text style={{ paddingBottom: 10 }}>Gender :</Text>
                            <DropDownPicker
                                items={[
                                    { label: 'Male', value: 'male', icon: () => <Icon name="male" size={18} color="#900" />, hidden: true },
                                    { label: 'Female', value: 'female', icon: () => <Icon name="female" size={18} color="#900" /> },
                                    { label: 'Others', value: 'others', icon: () => <Icon name="user" size={18} color="#900" /> },
                                ]}
                                defaultValue={gender}
                                containerStyle={{ height: 40 }}
                                style={{ backgroundColor: '#fafafa' }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa' }}
                                onChangeItem={handleSelectGender}
                            />
                        </View>
                        <View style={{ width: '80%', paddingTop: 10, paddingBottom: 10 }}>
                            <Text style={{ paddingBottom: 10 }}>Blood Group :</Text>
                            <DropDownPicker
                                items={[
                                    { label: 'A +', value: 'A +', icon: () => <Icon name="blood" size={18} color="#900" />, hidden: true },
                                    { label: ' A -', value: 'A - ', icon: () => <Icon name="blood" size={18} color="#900" />, },
                                    { label: 'B +', value: 'B +', icon: () => <Icon name="blood" size={18} color="#900" />, },
                                    { label: 'B -', value: 'B -', icon: () => <Icon name="blood" size={18} color="#900" />, },
                                    { label: 'AB +', value: 'AB +', icon: () => <Icon name="blood" size={18} color="#900" />, },
                                    { label: 'AB -', value: 'AB -', icon: () => <Icon name="blood" size={18} color="#900" />, },
                                    { label: 'O +', value: 'O +', icon: () => <Icon name="blood" size={18} color="#900" />, },
                                    { label: 'O -', value: 'O -', icon: () => <Icon name="blood" size={18} color="#900" />, },
                                ]}
                                defaultValue={bloodgroup}
                                containerStyle={{ height: 40 }}
                                style={{ backgroundColor: '#fafafa' }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa' }}
                                // onChangeItem={item => setCountry({ country: item.value })}
                                onChangeItem={handleSelectBlood}
                            />
                        </View>

                        <View style={styles.action}>
                            <FontAwesome
                                name="phone"
                                color="#b50000"
                                size={25}
                            />
                            <TextInput
                                placeholder="Contact Number"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => setContact(val)}
                            />
                        </View>
                        <View style={styles.textAreaContainer} >
                            <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                placeholder="Your Address..."
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                                onChangeText={(e) => setAdddress(e)}
                            />
                        </View>
                        <View style={styles.textAreaContainer} >
                            <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                placeholder="Place to Donate (City, State, Hospital, address etc.)"
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                                onChangeText={(e) => setPlace(e)}
                            />
                        </View>
                        <View style={styles.textAreaContainer} >
                            <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                placeholder="Message to Donor..."
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                                onChangeText={(e) => setMessage(e)}
                            />
                        </View>
                        <View style={{ paddingTop: 20 }}></View>
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={()=>sendData()}
                                style={styles.signIn}>
                                <LinearGradient
                                    colors={['#fc7979', '#ff2414']}
                                    style={styles.signIn} >
                                    <Text style={[styles.textSign, {
                                        color: '#fff', fontSize: 20, fontWeight: 'bold', letterSpacing: 1,
                                    }]}>Donate</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center', flexDirection: 'row',
                        }}>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default DonateBlood;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%'
    }, textAreaContainer: {
        borderColor: 'gray',
        // borderWidth: 1,
        padding: 5,
        width: '80%',
        marginTop: 10,
        borderBottomWidth: 1,
        backgroundColor: "#f2f2f2"
    },
    textArea: {
        height: 100,
        justifyContent: "flex-start"
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
        backgroundColor: '#4285f4',
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
