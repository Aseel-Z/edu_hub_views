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
            <Text class="font-mono text-5xlg p-2" >
            eduHub is a professional networking platform for people in education, who are based in Jordan.
            The platform helps educators,  teachers, professors, trainers, coaches,private tutors, 
            students and educational institutes professionally connect with each other. 
            </Text>
            <Text class="font-mono text-5xlg p-2">
            eduHub is a platform for students and educators to connect and share knowledge for all subject fields.
            It connects teachers and students educational institutes.
            </Text>
            </View>
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
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding: 10
    },
    twCont:tw`flex flex-col justify-center items-center`
  });


