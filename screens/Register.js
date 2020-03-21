import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, NativeModules, TextInput, Button, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import colors from "../consts/colors";
import fonts from "../consts/fontSize";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class RegisterFormView extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: '', email:'', password:'', showAlert: false};
    }
    onChangeText = (key, val) => {this.setState({ [key]: val })};

    signUp = async () => {
        Keyboard.dismiss();
         const { username, email, password} = this.state
         if(username.length<6) console.log('Username must be 5 characters at least');
         if(username=='' || email==''|| password=='') console.log('Every fields are require');
         if(password.length<8) console.log('Password must be 8 chars at least');
         else {
             console.log("dziala");
             this.showAlert();
         }
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
    showAlert = () => {
        console.log("funkcja")
        this.setState({
          showAlert: true
        });
      };
     
      hideAlert = () => {
        this.setState({
          showAlert: false
        });
      };

    render(){
        const {showAlert} = this.state;
        return(
            <ScrollView ref='scrollView' contentContainerStyle={styles.scllorer}>
                <View style={styles.container}>
                    <View style={styles.main_container}>
                        <Image
                            source={require('../consts/icons/logoM.png')}
                        />
                        <Text style={styles.title}>Join us</Text>
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
                            color= {colors.acceptButton}
                            title='Sign Up'
                            onPress={ this.signUp}
                        />
                    </View>
                </View>
                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="Succesfull!"
                    message="Thank you for signing up!"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText="Start"
                    confirmButtonColor='#186FF2'
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.main,
        alignItems: "center",

    },
    scllorer:{
        flex: 1,
        flexDirection: 'column'
    },
    main_container: {
        width: "90%",
        height: "65%",
        backgroundColor: colors.main,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20,
    },
    input: {
        width: "98%",
        height: "11%",
        backgroundColor: colors.options,
        margin: 10,
        padding: 8,
        color: colors.placeHolderColor,
        fontSize: fonts.h3,
        fontWeight: '300',
      },
    title:{
        marginTop: 40,
        fontSize: fonts.h3,
        marginBottom: 20,
        fontWeight: '500'
    }
})