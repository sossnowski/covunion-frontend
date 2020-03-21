import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button, ScrollView, FlatList} from 'react-native';
import colors from '../consts/colors'
import fontSize from '../consts/fontSize'
import tasksRequest from '../api/tasksRequest'


export default class MarketList extends React.Component {
    // static navigationOptions = {
    //     header: null,
    // };
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            ownTask: false,
            myEmail: "kbrzoska97@gmail.com",
            taskDataFromDb: []
        }
    }

    componentDidMount(){
        //this.getListData(this.state.ownTask)
        this.getTasks().then(result => {
            this.setState({
                taskDataFromDb: result
            })
        })

    }

    getTasks = async () => {
        try{
            let result = await tasksRequest()
            console.log(result)
        } catch (error) {
            console.log(error)
        }

    }

    getListData = (value) => {
        let listData = []
        if (value) {
            listData = this.state.objFromDb.filter(obj => {
                return obj.owner === this.state.myEmail

            })
        } else {
            listData = this.state.objFromDb.filter(obj => {
                return obj.owner !== this.state.myEmail

            })
        }

        console.log(listData)
        this.setState({
            listData: listData
        })
    }

    changeTypeOfAds = (value) => {
        this.setState({
            ownTask: value
        })
        this.getListData(value)
    }

    goToAdScreen = (ad) => {
        this.props.navigation.navigate('Advertisement', {ad: ad});
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topOptionsWrapper}>
                    <TouchableOpacity style={(this.state.ownTask === true) ? styles.activeTopOption : styles.inactiveTopOption} onPress={() => this.changeTypeOfAds(true)}>
                        <Text style={styles.topOptionText1}>Własne</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={(this.state.ownTask === false) ? styles.activeTopOption : styles.inactiveTopOption} onPress={() => this.changeTypeOfAds(false)}>
                        <Text style={styles.topOptionText2}>Przyjęte</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.listWrapper}>
                    <FlatList
                        data={this.state.listData}
                        renderItem={({item}) =>
                            <TouchableOpacity style={styles.listField} onPress={() => this.goToAdScreen(item)}>
                                <Text style={styles.listFieldText}>{(this.state.ownTask === true) ?  (item.executor + ' taken it') : ('task from: ' + item.owner)}</Text>
                                <Text style={styles.listFieldLocalisationText}>Telephone { (this.state.ownTask === true) ?  item.executorTelephone  :  item.ownerTelephone}</Text>
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
