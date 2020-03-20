import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, NativeModules, TextInput, Button, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class RegisterFormView extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: '', email:'', password:''};
    }
    onChangeText = (key, val) => {this.setState({ [key]: val })};

    signUp = async () => {
        Keyboard.dismiss();
         const { username, email, password} = this.state
         if(username.length<6) console.log('Username must be 5 characters at least');
         if(username=='' || email==''|| password=='') console.log('Every fields are require');
         if(password.length<8) console.log('Password must be 8 chars at least');
         else console.log('Udalo sie');
        };
    validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            this.setState({ email: text })
            return false;
        }
        else {
            this.setState({ email: text })
            console.log("Email is Correct");
        }
    };

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.main_container}>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            onChangeText={(val) => this.onChangeText('username', val)}
                            value={this.state.username}
                            blurOnSubmit={ false }
                            returnKeyType = { "next" }
                            onSubmitEditing={() => { this.Email.focus(); }}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={(val) => this.onChangeText('email', val)}
                            onChangeText={(val) => this.validateEmail(val)}
                            value={this.state.email}
                            blurOnSubmit={ false }
                            returnKeyType = { "next" }
                            ref={(input) => { this.Email = input; }}
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
                            onSubmitEditing={()=>{this.signUp()}}
                        />
                        <Button
                            style={styles.button}
                            title='Sign Up'
                            onPress={ this.signUp}
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