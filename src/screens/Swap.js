import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar, Image, SafeAreaView, TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';

const theme = {
    roundness: 2,
    backgroundColor: {
        primary: '#8d0000',
        accent: '#8d0000',
    },
};




const Swap = (props) => {

    const [info, setInfo] = useState();
    const [infoo, setInfoo] = useState();

    Geolocation.getCurrentPosition(data => {
        setInfo(data.coords.latitude),
            setInfoo(data.coords.longitude)
    }
    );
    // function getData(){
    //     Geocoder.init("AIzaSyBDZnoI0c2hk7r8xeRmNfMpghtRgkrVYBQ"); // use a valid API key

    //     Geocoder.from("visakhapatnam,andhra pradesh,india")
    // 	.then(
    //         json => {
    // 		var location = json.results[0].geometry.location;
    // 		console.log(location);
    // 	})
    //     .catch(error => console.log(error));

    // }

    // getData()




    return (
        <>

            <View style={styles.action} >
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>

                    <Image source={require('../images/menu.png')}

                    />
                </TouchableOpacity>
                <Text style={styles.textInput}>Nearby Teams</Text>
            </View>

            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ height: '100%' }}
                initialRegion={{
                    latitude: info,
                    longitude: infoo,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={{
                    latitude: 24.8959044,
                    longitude: 67.0254503,
                }} image={require('../images/pointer.png')}
                    title={'A'}
                />

                <Marker coordinate={{
                    latitude: 25.1985583,
                    longitude: 66.7637962,
                }} image={require('../images/pointer.png')}
                    title={'AB'}
                />

                <Marker coordinate={{
                    latitude: 32.6380669,
                    longitude: 71.5250937,
                }} image={require('../images/pointer.png')}
                    title={'B +'}
                />

                <Marker coordinate={{
                    latitude: 24.8728772,
                    longitude: 67.1271218,
                }} image={require('../images/pointer.png')}
                    title={'A'}
                />
                <Marker coordinate={{
                    latitude: 25.0444896,
                    longitude: 67.0362299,
                }} image={require('../images/pointer.png')}
                    title={'O +'}
                />

                <Marker coordinate={{
                    latitude: info,
                    longitude: infoo,
                }} image={require('../images/markkk.png')}
                    title={'Your Location'}
                />
            </MapView>




        </>
    );
};

export default Swap;

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
