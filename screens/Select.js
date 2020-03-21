import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, NativeModules, TextInput, Button, Keyboard} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../consts/colors';
import fonts from "../consts/fontSize";

export default class SelectRoleMarketView extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.main_controler}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MarketList')}>
                            <View>
                                <Image
                                    source={require('../consts/icons/helpcolorbig.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MarketList')}>
                            <View>
                                <Image
                                    source={require('../consts/icons/checklistbig.png')}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>                   
                </View>
            </View>
        );
    }
    
}
const styles = StyleSheet.create({
    main_controler:{
        flex: 1, 
        backgroundColor:colors.second, 
        width: "90%", 
        height: '60%',
        marginVertical: 50, 
        marginLeft:10,
        marginRight: 10,
        borderRadius: 14,
    },
    container:{
        alignItems:"center",
        justifyContent: 'space-around',
        flex:1,
        flexDirection: 'row',
    },
    box: {
        width: "30%",
        height: "22%",
        backgroundColor: colors.second,
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderTopWidth: 5,
        borderRadius: 10,
        alignItems:'center',
        justifyContent: 'center'
    },
})