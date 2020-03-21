import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, NativeModules, TextInput, Button, Keyboard } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import colors from "../consts/colors";
import fonts from "../consts/fontSize";



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
            return " need your help!! :)";
        } else return " wanna help you!! :)"
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.container}>
                        <View style={styles.top_bar}>
                            <Text style={styles.needHelpText}>{this.state.advertisement.user}{this.needHelp()}</Text>
                        </View>
                        <View style={styles.localization_date}>
                            <View><Text style={styles.localization_date_text}>{this.state.advertisement.localization}</Text></View>
                            <View><Text style={styles.localization_date_text}>{this.state.advertisement.date}</Text></View>
                        </View>
                        <View style={styles.title}><Text style={styles.title_text}>{this.state.advertisement.title}</Text></View>
                        <View style={styles.description}><Text style={styles.description_text}>{this.state.advertisement.description}</Text></View>
                    </View>
                </View>
            </ScrollView>
            
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main,
        marginTop: 20,
        marginHorizontal: 10

    },
    top_bar:{
        flex: 1,
        backgroundColor: colors.second,
        alignItems: "center",
        justifyContent: 'center',
        textAlign:"center",
    },
    needHelpText:{
        fontSize: fonts.h1
    },
    localization_date:{
        alignItems: 'flex-end',
        marginRight: 5,
        marginTop: 5,
        marginBottom: 40
    },
    localization_date_text:{
        fontSize: fonts.h4,
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
    },
    description_text:{
        fontSize: fonts.h3,
    },
    title_text:{
        fontSize: fonts.h2,
    }
})