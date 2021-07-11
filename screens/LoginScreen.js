import React , {useState} from 'react'
import { View, Text , StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Input , Button,Image  } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { KeyboardAvoidingView } from 'react-native';



const LoginScreen = ({navigation}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signIn = () => {

    }

    return (

        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            
            <Image style={{width:200 , height:200, marginBottom:30 }} source={{uri:"https://image.flaticon.com/icons/png/512/3256/3256114.png"}}/>  
            <Text style={{marginBottom:30 , fontSize:30, fontWeight:'bold', color:"#2C6BED"}}>
                EDU HUB
            </Text>
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
           
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} onPress={() => navigation.navigate('Register')} type="outline" title="Register" />
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
    }
  });

  
