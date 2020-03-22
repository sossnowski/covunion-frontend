import React, { Component } from 'react';
import {Text, View, Button, FlatList, StyleSheet} from 'react-native';
import { ListItem } from 'react-native-elements'
import EachIdea from "./EachIdea";
import colors from '../consts/colors'
import fontSize from '../consts/fontSize'
import IdeasRequest from '../api/ideasRequest'

const ogloszenia = [{
    id: '23ufg832gf8',
    title: 'first Title',
    description: 'First description',
    author: 'Marcin',
    votes: 3
}, {
    id: '2323f32f2gf8',
    title: 'second Title',
    description: 'Second description',
    author: 'Michał',
    votes: 7
}
];

function Item({ title }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}


export default class TypesOfPrevention extends React.Component{
    static navigationOptions = {
        title: "User Best Ideas",
    };

    constructor(props) {
        super(props);
        let info;
        this.state = {
            listData: [],
            loading: true,
            ownTask: false,
            myEmail: "kbrzoska97@gmail.com",
            taskDataFromDb: []
        }
    }

    componentDidMount(){
        this.getIdeas().then(result => {
            this.info = this.state.listData.ideas;
        })
    }


    getIdeas = async () => {
        try{
            let result = await IdeasRequest();
            this.setState({
                listData: result
            });
            console.log(this.state.listData.ideas);
        } catch (error) {
            console.log(error)
        }
    };
    render() {
        const goToEachIdea = (idea) => {
            this.props.navigation.navigate('EachIdea', {idea: idea});
        };
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.listData.ideas}
                    renderItem={({item}) => (
                        <View>
                            <ListItem
                                title = {
                                    <Text style={styles.itemTitle}>{item.title}</Text>
                                }
                                onPress={() => goToEachIdea(item)}
                                bottomDivider
                                rightIcon = {{ name: 'keyboard-arrow-right', style: { color: colors.second } }}
                                badge = {{ value: item.votes, textStyle: { color: 'white' }, containerStyle: { marginTop: 0 } }}
                            />
                        </View>
                    )}
                    keyExtractor={(item) => item._id}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: 'white'
    },
    item: {
        height: 70,
        backgroundColor: colors.options,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.second,
        fontSize: fontSize.listFieldText,
    },
    itemTitle: {
        justifyContent: "center",
        fontWeight: "bold",

    }
});