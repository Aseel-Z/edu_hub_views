import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Input, Button, Text } from 'react-native-elements';

const RegisterScreen = ({navigation}) => {

    const [name,setName] = useState("");

    const register = () =>{

    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{marginBottom:30}} >
                Create Account 
            </Text>
            <View style={styles.inputContainer}>
               <Input
                style={{marginBottom:10}}
                placeholder="Name"
                autoFocus 
                type="text"
                value={name}
                onChange={(text)=>{setName(text)}}
                  />
            <Input
                style={{marginBottom:10}}
                placeholder="Name"
                autoFocus 
                type="text"
                value={name}
                onChange={(text)=>{setName(text)}}
                  />
            <Input
                style={{marginBottom:10}}
                placeholder="Name"
                autoFocus 
                type="text"
                value={name}
                onChange={(text)=>{setName(text)}}
                  /> 
            <Input
                style={{marginBottom:10}}
                placeholder="Name"
                autoFocus 
                type="text"
                value={name}
                onChange={(text)=>{setName(text)}}
                  />      
            <Input
                style={{marginBottom:10}}
                placeholder="Name (optinal)"
                autoFocus 
                type="text"
                value={name}
                onSubmitEditing={register}
                  />         
            </View>      
            <Button containerStyle={styles.button} raised onPress={register} title="submit" />
            <View style={{height:30}} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding: 10
    },
    inputContainer:{
        width:400
    },
    button:{
        width:200,
        marginTop:20
    },
});

export default RegisterScreen
