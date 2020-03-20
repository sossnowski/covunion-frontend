import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, NativeModules, TextInput, Button, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class SelectRoleMarketView extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{flex:0.6, backgroundColor:'lightblue', width: 300, marginTop: 50, marginLeft:10}}>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Button
                            onPress={() => this.props.navigation.navigate('Select')}
                            title={'M'}
                        />
                    </View>
                    <View style={styles.box}>
                        <Button
                            onPress={() => this.props.navigation.navigate('Select')}
                            title={'L'}
                        />    
                    </View>
                </View>                   
            </View>
        );
    }
    
}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent: 'space-around',
        flex:1,
        flexDirection: 'row',
    },

    box: {
        width: 100,
        height: 100,
        backgroundColor: 'pink',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderTopWidth: 5,
        borderRadius: 10

    },
    text:{
        fontSize: 40,
        textAlign: "center",
        justifyContent: 'center'
    }
})