import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet , Button , Text, View , Link ,TextInput} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';




const Stack = createStackNavigator();

const globalScreenOption = {
  headerStyle:{backgroundColor:"#2C6BED"},
  headerTitleStyle:{color:"white"},
  headerTintColor:"white",
}

export default function App() {
  return (

    <NavigationContainer >
      <Stack.Navigator screenOptions ={globalScreenOption}>
        <Stack.Screen component={LoginScreen} name="Login"></Stack.Screen>
        <Stack.Screen component={RegisterScreen} name="Register"></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
{/* <StatusBar style="auto" /> */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


