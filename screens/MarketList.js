import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button, ScrollView, FlatList} from 'react-native';
import colors from '../consts/colors'
import fontSize from '../consts/fontSize'


export default class MarketList extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            needHelpAds: true,
            objFromDb: [
            {
                _id: "5e74d4ad499ecf6fe9a182b8",
                title: "ogloszenie checi wziecia pomocy 1",
                description: "jakies opis",
                user: "kbrzoska97@gmail.com",
                localization: "stalowa wola",
                address: "jakas tam",
                date: "2020-03-20T14:35:25.823Z",
                coordinates: "none",
                needHelp: true,
                __v: 0
            },
            {
                _id: "5e74d5568f0b7d6ffb411f40",
                title: "ogloszenie checi udzielenia pomocy 1",
                description: "jakies opis",
                user: "kbrzoska97@gmail.com",
                localization: "stalowa wola",
                address: "jakas tam",
                date: "2020-03-20T14:38:14.581Z",
                coordinates: "none",
                needHelp: false,
                __v: 0
            },
            {
                _id: "5e74d4ad499ecf6fe9a182b8",
                title: "ogloszenie checi wziecia pomocy 2",
                description: "jakies opis",
                user: "kbrzoska97@gmail.com",
                localization: "stalowa wola",
                address: "jakas tam",
                date: "2020-03-20T14:35:25.823Z",
                coordinates: "none",
                needHelp: true,
                __v: 0
            },
            {
                _id: "5e74d5568f0b7d6ffb411f40",
                title: "ogloszenie checi udzielenia pomocy 2",
                description: "jakies opis",
                user: "kbrzoska97@gmail.com",
                localization: "stalowa wola",
                address: "jakas tam",
                date: "2020-03-20T14:38:14.581Z",
                coordinates: "none",
                needHelp: false,
                __v: 0
            }
        ],
        }
    }

    componentDidMount(){
        this.getListData(this.state.needHelpAds)
    }

    getListData = (value) => {
        let listData = this.state.objFromDb.filter(obj => {
            return obj.needHelp === value
        })
        console.log(listData)
        this.setState({
            listData: listData
        })
    }

    changeTypeOfAds = (value) => {
        this.setState({
            needHelpAds: value
        })
        this.getListData(value)
    }

    goToAdScreen = (ad) => {
        this.props.navigation.navigate('ScreenMarola', {ad: ad});
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topOptionsWrapper}>
                    <TouchableOpacity style={(this.state.needHelpAds === true) ? styles.activeTopOption : styles.inactiveTopOption} onPress={() => this.changeTypeOfAds(true)}>
                        <Text style={styles.topOptionText1}>Potrzebuję</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={(this.state.needHelpAds === false) ? styles.activeTopOption : styles.inactiveTopOption} onPress={() => this.changeTypeOfAds(false)}>
                        <Text style={styles.topOptionText2}>Oferuję</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.listWrapper}>
                    <FlatList
                        data={this.state.listData}
                        renderItem={({item}) =>
                            <TouchableOpacity style={styles.listField} onPress={this.goToAdScreen(item)}>
                                <Text style={styles.listFieldText}>{item.title}</Text>
                                <Text style={styles.listFieldLocalisationText}>{item.localization + ' ul.' + item.address}</Text>
                            </TouchableOpacity> }
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //alignItems: 'center',
        //justifyContent: 'center',
        color: 'black',
        marginTop: 20,
        width: '100%'
    },
    activeTopOption: {
        backgroundColor: colors.options,
        width: '50%',
        height: 50,
        alignItems: 'center',
        borderRightColor: 'black',
        borderRightWidth: 1,
        justifyContent: 'center',

    },
    inactiveTopOption: {
        backgroundColor: colors.second,
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    topOptionsWrapper: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
    },
    topOptionText1: {
        fontSize: fontSize.h3,
    },
    topOptionText2: {
        fontSize: fontSize.h3,
    },
    listWrapper: {
        marginTop: 30,
    },
    listField: {
        height: 70,
        backgroundColor: colors.options,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.second
    },
    listFieldText: {
        fontSize: fontSize.listFieldText
    },
    listFieldLocalisationText: {
        textAlign: 'right',
        color: colors.second,
        marginTop: 10
    }
})
