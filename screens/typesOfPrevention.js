import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class TypesOfPrevention extends React.Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Hello TypesOfPrevention</Text>
                <Button title="Go back" onPress={() => this.props.navigation.goBack(null)} />
            </View>
        );
    }
}