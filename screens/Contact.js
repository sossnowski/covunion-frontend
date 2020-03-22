import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Contact extends React.Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>HELLO Contact</Text>
                <Button title="Go back" onPress={() => this.props.navigation.goBack(null)} />
            </View>
        );
    }
}