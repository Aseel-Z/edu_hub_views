import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, KeyboardAvoidingView,ScrollView,SafeAreaView } from 'react-native'
import { Input, Button, Text } from 'react-native-elements';
import { Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const RegisterScreen = ({navigation,route}) => {

    const devWidth = Dimensions.get('window').width;

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");

    const register = () =>{
        navigation.navigate('Home');
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{marginBottom:30}} >
                Create Account 
            </Text>
            <SafeAreaView style={{height:500}}>
                <ScrollView style={styles.inputContainer}>
                    <Input
                        style={{marginBottom:10}}
                        placeholder="Name"
                        autoFocus 
                        type="text"
                        value={name}
                        onChangeText={(text)=>{setName(text)}}
                        />
                    <Input
                        placeholder="Email"
                        autoFocus 
                        type="email"
                        value={email}
                        onChangeText={(text)=>{setEmail(text);route.params.setUsername(text);}}
                        /> 
                    <Input 
                        placeholder="password" 
                        secureTextEntry 
                        type="password"
                        value={password}
                        onChangeText={(text)=>{setPassword(text);route.params.setPass(text);}} /> 
                    <Input
                        style={{marginBottom:10}}
                        placeholder="Name"
                        autoFocus 
                        type="text"
                        value={name}
                        onChangeText={(text)=>{setName(text)}}
                        />
                    <Input
                        style={{marginBottom:10}}
                        placeholder="Name"
                        autoFocus 
                        type="text"
                        value={name}
                        onChangeText={(text)=>{setName(text)}}
                        />
                    <Input
                        style={{marginBottom:10}}
                        placeholder="Name"
                        autoFocus 
                        type="text"
                        value={name}
                        onChangeText={(text)=>{setName(text)}}
                        />
                    <Input
                        style={{marginBottom:10}}
                        placeholder="Name"
                        autoFocus 
                        type="text"
                        value={name}
                        onChangeText={(text)=>{setName(text)}}
                        /> 
                    <Input
                        style={{marginBottom:10}}
                        placeholder="Name"
                        autoFocus 
                        type="text"
                        value={name}
                        onChangeText={(text)=>{setName(text)}}
                        />
                    <Input
                        style={{marginBottom:10}}
                        placeholder="Name"
                        autoFocus 
                        type="text"
                        value={name}
                        onChangeText={(text)=>{setName(text)}}
                        />  
                    <Input
                        style={{marginBottom:10}}
                        placeholder="Name"
                        autoFocus 
                        type="text"
                        value={name}
                        onChangeText={(text)=>{setName(text)}}
                        />      
                    <Input
                        style={{marginBottom:10}}
                        placeholder="Name (optinal)"
                        autoFocus 
                        type="text"
                        value={name}
                        onSubmitEditing={register}
                        />         
                </ScrollView>   
            </SafeAreaView>   
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
        width:350
    },
    button:{
        width:200,
        marginTop:20
    },
});

export default RegisterScreen