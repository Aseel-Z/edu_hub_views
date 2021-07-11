import {React , useState} from 'react'

import { View, Text , StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';



import { Input , Button,Image  } from 'react-native-elements';
// import { Input } from 'react-native-elements/dist/input/Input';

import tw from 'tailwind-react-native-classnames';



const LoginScreen = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")



    return (
        <View>
            <StatusBar style="light" />
            
            <Image style={{width:200 , height:200 }} source={{uri:"https://image.flaticon.com/icons/png/512/3256/3256114.png"}}/>  

            <View style={styles.inputContainer}>
               <Input
                placeholder="Email"
                autoFocus 
                type="email"
                value={email}
                onChange={(text)=>{setEmail(text)}}
                  /> 
               <Input 
               placeholder="password" 
               secureTextEntry 
               type="password"
               value={password}
               onChange={(pass)=>{setPassword(pass)}} />  
            </View>
           
            
            
            <Button containerStyle={styles.button} title="Login" />
            <Button containerStyle={styles.button} type="outline" title="Register" />
            
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer:{},
    button:{}
  });

  
