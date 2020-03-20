import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, NativeModules, TextInput, Button, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class LoginFormView extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: '', password:''};
    }
    onChangeText = (key, val) => {this.setState({ [key]: val })};

    logIn = async () => {
        Keyboard.dismiss();
        const { username, password} = this.state
        if(username!=''&& password!='') console.log('zalogowano')
        else console.log('zle pasy'); 
        };

    render(){
        return(
            <ScrollView > 
                <View style={styles.container}>
                    <View style={styles.main_container}>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            onChangeText={(val) => this.onChangeText('username', val)}
                            value={this.state.username}
                            blurOnSubmit={ false }
                            returnKeyType = { "next" }
                            onSubmitEditing={() => { this.Password.focus(); }}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={(val) => this.onChangeText('password', val)}
                            value={this.state.password}
                            blurOnSubmit={ false }
                            ref={(input) => { this.Password = input; }}
                            returnKeyType = { "done" }
                            onSubmitEditing={()=>{this.logIn()}}
                        />
                        <Button
                            style={styles.button}
                            title='Log In'
                            onPress={ this.logIn}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'skyblue',
        alignItems: "center",

    },
    main_container: {
        width: 300,
        height: 500,
        backgroundColor: 'skyblue',
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 30,
    },
    input: {
        width: 250,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'grey',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '300',
      },
    text:{
        padding: 10,
        fontSize: 42
    },
    button:{
        width: 200,
        height:85,
        borderRadius: 2,
    }
})