import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, NativeModules, TextInput, Button, Keyboard } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import fontSize from "../consts/fontSize";
import VoteAnIdea from "../api/voteAnIdea"


export default class EachIdea extends React.Component{

    voteAnIdea = async (ideaId) => {
        await VoteAnIdea(ideaId);
    };

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
                    <Text style={styles.eachRow}><Text style={{fontSize:fontSize.h3}}>Author: </Text>{this.state.eachIdea.author}</Text>
                    <Text style={styles.eachRow}><Text style={{fontSize:fontSize.h3}}>Title: </Text> {this.state.eachIdea.title}</Text>
                    <Text style={styles.eachRow}><Text style={{fontSize:fontSize.h3}}>Votes: </Text>{this.state.eachIdea.votes}</Text>
                    <Text style={styles.eachRow}><Text style={{fontSize:fontSize.h3}}>Description: </Text></Text>
                    <Text style={styles.description}>{this.state.eachIdea.description}</Text>
                </View>
                <View>
                    <Text style={styles.question}>How do you like this idea?</Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button} >
                            <Button onPress={() => this.voteAnIdea({
                                ideaId: this.state.eachIdea._id,
                            })} title={'Like it'} />
                        </View>
                    </View>
                </View>
                <View>
                    <Button
                        onPress={() => this.props.navigation.goBack()}
                        title={'Go back'}
                    />
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
        height: 40
    },
    question: {
        fontSize: fontSize.h3,
        marginTop:20,
        marginLeft: 10
    }
});