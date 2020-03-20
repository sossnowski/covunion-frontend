import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

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
export default class NotificationBoard extends React.Component{

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>HELLO NotifcationBoard</Text>
                <Button title="Go back" onPress={() => this.props.navigation.goBack(null)}/>
            </View>

        );
    }
}