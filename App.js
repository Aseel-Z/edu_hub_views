import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet , Button , Text, View , Link ,TextInput} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import ResultScreen from './screens/ResultScreen';
import MessagesScreen from './screens/MessagesScreen';
// import React from 'react';
// // import { render } from 'react-dom';
// import {
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// window.navigator.userAgent = 'react-native';
import io from 'socket.io-client/dist/socket.io';


export default class App extends React.Component{
  state = {name: 'Aseel'}


  constructor(){
    super();
    this.socket = io('localhost:3000', {jsonp:false});
    this.socket.on('update', ()=>{this.setState({name :'Ahmad'})}
    )}


render(){
  return (
    <View styles = {styles.container}>
      <Text> {this.state.name}</Text>

    </View>
  )
}}




// export default class App extends React.Component {
//   state = {
//     count: 0
//   }

//   constructor(){
//     super();
//     this.socket = io('localhost:3000', {jsonp:false});}

//   onPress = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//  render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//          style={styles.button}
//          onPress={this.onPress}
//         >
//          <Text>Click me</Text>
//         </TouchableOpacity>
//         <View>
//           <Text>
//             You clicked { this.state.count } times
//           </Text>
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     marginBottom: 10
//   }
// })






const Stack = createStackNavigator();

const globalScreenOption = {
  headerStyle:{backgroundColor:"#2C6BED"},
  headerTitleStyle:{color:"white"},
  headerTintColor:"white",
};

export default function App() {
  state = {name: 'Aseel'}


  constructor(){
    super();
    this.socket = io('localhost:3000', {jsonp:false});
    this.socket.on('update', ()=>{this.setState({name :'Ahmad'})}
    )}


  const [username,setUsername] = useState('');
  const [pass,setPass] = useState('');
  
  return (

    <NavigationContainer >
      <Stack.Navigator screenOptions ={globalScreenOption}>
      <View styles = {styles.container}>
      <Text> {this.state.name}</Text>
      </View>
        <Stack.Screen component={LoginScreen} initialParams={{setUsername:setUsername,setPass:setPass}} name="Login"></Stack.Screen>
        <Stack.Screen component={RegisterScreen} initialParams={{setUsername:setUsername,setPass:setPass}} name="Register"></Stack.Screen>
        <Stack.Screen component={ResultScreen} data={{}} name="Result"></Stack.Screen>
        <Stack.Screen component={ProfileScreen} data={{}} name="Profile"></Stack.Screen>
        <Stack.Screen component={SearchScreen} data={{}} name="Search"></Stack.Screen>
        <Stack.Screen component={HomeScreen} initialParams={{username:username,pass:pass}} name="Home"></Stack.Screen>
        <Stack.Screen component={MessagesScreen} data={{}} name="Messages"></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
{/* <StatusBar style="auto" /> */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button:{
    width:200,
    marginTop:20
},
});