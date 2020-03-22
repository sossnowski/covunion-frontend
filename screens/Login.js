import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, NativeModules, TextInput, Button, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import colors from "../consts/colors";
import fonts from "../consts/fontSize";

export default class LoginFormView extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: '', password:''};
    }
    onChangeText = (key, val) => {this.setState({ [key]: val })};

    logIn = async () => {
        Keyboard.dismiss();
        const { username, password} = this.state;
        if(username!=''&& password!='') console.log('zalogowano');
        else console.log('zle pasy'); 
        };

    render(){
        return(
            <ScrollView ref='scrollView' contentContainerStyle={styles.scllorer}> 
                <View style={styles.container}>
                    <Image
                        source={require('../consts/icons/logoM.png')}
                        style={{marginTop:20}}
                    />
                    <View style={styles.main_container}>
                        <Text style={styles.title}>Hi Again</Text>
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
                        <View style={{marginTop:10}}>
                            <Button
                                color= {colors.acceptButton}
                                title='Log In'
                                onPress={ this.logIn}
                            />
                        </View>
                    </View>
                </View>
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
        height: "60%",
        backgroundColor: colors.main,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 14,
    },
    input: {
        width: "98%",
        height: "11%",
        backgroundColor: colors.white,
        margin: 10,
        padding: 8,
        color: colors.placeHolderColor,
        fontSize: fonts.h3,
        fontWeight: '300',
      },
    title:{
        fontSize: fonts.h3,
        marginBottom: 20,
        fontWeight: '500',
        color: colors.acceptButton
    }
})