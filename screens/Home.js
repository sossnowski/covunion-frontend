import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Home extends React.Component {
        render(){
            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>Navigate to:</Text>
                    <Button
                        onPress={() => this.props.navigation.navigate('TypesOfPrevention')}
                        title={'Types of prevention'}
                        type="outline"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Contact')}
                        title={'Contact'}
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('NotificationBoard')}
                        title={'Notification board'}
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Login')}
                        title={'Login'}
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Register')}
                        title={'Register'}
                    />
                        <Button
                            onPress={() => this.props.navigation.navigate('MarketList')}
                            title={'market list'}
                        />
                </View>
            )
        }
}