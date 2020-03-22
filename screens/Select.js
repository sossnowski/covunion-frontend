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
                <Image
                    source={require('../consts/icons/logoM.png')}
                />
                <View style={styles.container}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.image} onPress={() => this.props.navigation.navigate('TypesOfPrevention')}>
                            <View style={styles.box}>
                                <Image
                                    source={require('../consts/icons/checklistbig.png')}
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
                        <TouchableOpacity style={styles.image} onPress={() => this.props.navigation.navigate('MarketList')}>
                            <View>
                                <Image
                                    source={require('../consts/icons/helpcolorbig.png')}
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
        flexDirection: 'column',
        alignItems: 'center',
    },
    container:{
        alignItems:"center",
        justifyContent: 'space-around',
        flex:1,
        flexDirection: 'column',
        marginBottom: 25,
        marginTop: 10
    },
    image:{
        width: "100%",
        height: "35%",
        alignItems: 'center',
        paddingHorizontal: 50,
        paddingTop: 40

    }
})