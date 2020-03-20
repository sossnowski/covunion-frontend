import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, NativeModules, TextInput, Button, Keyboard } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';




export default class AdvertisementView extends React.Component{
    constructor(props){
        super(props);
        const navigationData = this.props.navigation.state.params.ad;
        this.state = {
            // advertisement:{
            //     "_id": "5e74d4ad499ecf6fe9a182b8",
            //     "title": "ogloszenie checi wziecia pomocy",
            //     "description": "jakies opis",
            //     "user": "kbrzoska97@gmail.com",
            //     "localization": "stalowa wola ul. jakas",
            //     "date": "2020-03-20T14:35:25.823Z",
            //     "coordinates": "none",
            //     "needHelp": true,
            //     "__v": 0
            // }
            advertisement: navigationData
        }
    }

    needHelp(){
        if(this.state.advertisement.needHelp==true){
            return "need your help!! :)";
        } else return "wanna help you!! :)"
    }

    render(){
        return(

            <View style={styles.container}>
                <View style={styles.top_bar}>
        <Text style={styles.needHelpText}>{this.state.advertisement.user}{this.needHelp()}</Text>
                </View>
                <View style={styles.localization_date}>
                    <View><Text>{this.state.advertisement.localization}</Text></View>
                    <View><Text>{this.state.advertisement.date}</Text></View>
                </View>
                <View style={styles.title}><Text style={{fontSize:20}}>{this.state.advertisement.title}</Text></View>
                <View style={styles.description}><Text>{this.state.advertisement.description}</Text></View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        backgroundColor: '#C4E2FF',
        marginTop: 40,
        marginHorizontal: 10

    },
    top_bar:{
        flex: 0.2,
        backgroundColor: '#99CCFF',
        alignItems: "center",
        justifyContent: 'center'
    },
    needHelpText:{
        fontSize: 25
    },
    localization_date:{
        alignItems: 'flex-end',
        marginRight: 5,
        marginTop: 5,
        marginBottom: 40
    },
    title:{
        alignItems:"center",
        marginTop: 10,
        marginHorizontal: 5,
    },
    description:{
        alignItems:"center",
        marginHorizontal: 25,
        marginVertical: 30
    }
})