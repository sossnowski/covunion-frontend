import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import RegisterFormView from './screens/Register';
import LoginFormView from './screens/Login';


export default function App() {
  return (
    <View>
      <RegisterFormView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
