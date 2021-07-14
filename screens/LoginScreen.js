import React , {useState} from 'react'
import { View, Text , StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Input , Button,Image  } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { KeyboardAvoidingView } from 'react-native';
import { Dimensions } from 'react-native';
import { getToken } from '../services/api';


const LoginScreen = ({navigation,route}) => {

    const devWidth = Dimensions.get('window').width;

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signIn = () => {
        console.log(email,password)
        const checkUser = (username,pass) =>{
            getToken(username,pass).then(response =>{
                if (response != undefined){
                    navigation.navigate('Home')
                }
            })
        }
        checkUser(email,password)
    }

    return (

        <KeyboardAvoidingView behavior="padding" style={devWidth > 600? styles.twCon2: styles.twCont}>
            <StatusBar style="light" />
            
            <Image style={{width:200 , height:200, marginBottom:30, marginTop:10 }} source={{uri:"https://image.flaticon.com/icons/png/512/3256/3256114.png"}}/>  
            <Text style={{marginBottom:30 , fontSize:30, fontWeight:'bold', color:"#2C6BED"}}>
                EDU HUB
            </Text>
            <View style={styles.inputContainer}>
               <Input
                placeholder="Email"
                autoFocus 
                type="email"
                value={email}
                onChangeText={(text)=> {setEmail(text);route.params.setUsername(text);}}
                  /> 
               <Input 
               placeholder="password" 
               secureTextEntry 
               type="password"
               value={password}
               onChangeText={(text)=> {setPassword(text);route.params.setPass(text);}} />  
            </View>
           
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} onPress={() => {navigation.navigate('Register')}} type="outline" title="Register" />
            <View style={{height:30}} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer:{
        width:300
    },
    button:{
        width:200,
        marginTop:20
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding: 10
    },
    twCont:tw`flex flex-col justify-center items-center m-3 border rounded-lg`,
    twCon2:tw`flex flex-col justify-center items-center m-3 rounded-lg`
  });
