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
            <View style={styles.main_controler}>
                <View style={styles.container}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MarketList')}>
                            <View>
                                <Image
                                    source={require('../consts/icons/helpcolorbig.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        <View
                            style={{
                                height: 1,
                                width: 200,
                                borderBottomColor: '#C3C3C3',
                                borderBottomWidth: 1,
                            }}
                        />
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
        backgroundColor: colors.main, 
        width: "100%", 
        height: '100%',
        flexDirection: 'column'
    },
    container:{
        alignItems:"center",
        justifyContent: 'space-around',
        flex:1,
        flexDirection: 'column',
        marginVertical: 35,
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