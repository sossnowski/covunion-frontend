import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, NativeModules, TextInput, Button, Keyboard } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import fontSize from "../consts/fontSize";
import colors from "../consts/colors";


export default class EachIdea extends React.Component{
    constructor(props){
        super(props);
        const navigationData = this.props.navigation.state.params.idea;
        this.state = {
            eachIdea: navigationData
        }
    }

    render(){
        return(

            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.state.eachIdea.title}</Text>
                    <Text style={styles.subtitle}>{this.state.eachIdea.description} </Text>
                    <Text style={{fontSize:fontSize.h4, textAlign: 'right', marginRight: 20 }}>{this.state.eachIdea.author}</Text>
                    <Text style={{fontSize:fontSize.h3}}></Text>

                </View>
                <View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{color: 'white'}}>Like</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>

        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 10

    },
    eachRow: {
        fontSize: fontSize.h4,
        marginTop:20
    },
    description: {
        marginTop: 15
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20
    },
    button: {
        width: '40%',
        height: 40,
        backgroundColor: colors.acceptButton,
        marginLeft: '30%',
        alignItems: 'center',
        paddingTop: 10,
        color: 'white',
        borderRadius: 3
    },
    question: {
        fontSize: fontSize.h3,
        marginTop:20,
        marginLeft: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40
    },
    subtitle: {
        fontSize: 17,
        marginBottom: 30,
    }
});