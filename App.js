import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';import 'react-native-gesture-handler';
import {createStackNavigator} from "react-navigation-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import {createAppContainer} from "react-navigation";
import Register from "./screens/Register";
import NotificationBoard from "./screens/notificationBoard";
import Contact from "./screens/Contact";
import TypesOfPrevention from "./screens/typesOfPrevention";
const RootStack = createStackNavigator(
    {
      Home: {screen: Home},
      Login:{screen:Login},
      Register: {screen: Register},
      NotificationBoard:{screen: NotificationBoard},
      Contact: {screen: Contact},
      TypesOfPrevention: {screen: TypesOfPrevention}

    },{
      initialRouteName: 'Home'
    }
);const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component{
  render() {
    return (
        <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
