import React , {useState} from 'react'
import { View, Text , StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Input , Button,Image  } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { KeyboardAvoidingView } from 'react-native';





const AboutUsScreen = () => {


    return (

        <KeyboardAvoidingView behavior="padding" style={styles.twCont}>
            <View style={styles.inputContainer}>
            <Text>
            eduHub is a professional networking platform for people in education, who are based in Jordan.
            The platform helps educators,  teachers, professors, trainers, coaches,private tutors, 
            students and educational institutes professionally connect with each other. 
            </Text>
            </View>

           {/* <StatusBar style="light" />
            
        //     <Image style={{width:200 , height:200, marginBottom:30 }} source={{uri:"https://image.flaticon.com/icons/png/512/3256/3256114.png"}}/>  
        //     <Text style={{marginBottom:30 , fontSize:30, fontWeight:'bold', color:"#2C6BED"}}>
        //         EDU HUB
        //     </Text>

           
        //     <Button containerStyle={styles.button} onPress={signIn} title="Login" />
        //     <Button containerStyle={styles.button} onPress={() => {navigation.navigate('Register')}} type="outline" title="Register" />
        //     <View style={{height:30}} /> */}
        </KeyboardAvoidingView>
    )
}

export default AboutUsScreen

const styles = StyleSheet.create({
    inputContainer:{
        width:900,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding: 20
    },
    button:{
        width:900,
        marginTop:20
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding: 10
    },
    twCont:tw`flex flex-col justify-center items-center`
  });
