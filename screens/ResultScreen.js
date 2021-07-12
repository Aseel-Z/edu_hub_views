import React , {useState} from 'react'
import { View, Text , StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import tw from 'tailwind-react-native-classnames';
import { KeyboardAvoidingView } from 'react-native';
import { Button , Image } from 'react-native';

const data = {
    image:{uri:'https://image.flaticon.com/icons/png/512/3135/3135715.png'},
    name:'Person teacher',
    specialization:'Math',
    biography:'math teacher with 10 years experience Totally optional short description about yourself, what you do and so on.',
    city:'Amman',
    email:'tree@udu.com',
    mobile:'075692633'
}

const icons ={
    location:{uri:'https://image.flaticon.com/icons/png/512/684/684850.png'},
    email:{uri:'https://image.flaticon.com/icons/png/512/580/580704.png'}, 
    message:{uri:'https://image.flaticon.com/icons/png/512/893/893268.png'},   
}
// mx-auto my-16 lg:my-0
const listHours = ['hhh',[]].map((hour) =>
        <View style={tw`w-11/12 flex items-center justify-center h-auto lg:h-screen flex-wrap  my-2 lg:my-0`}>
        <View style={tw`w-full lg:w-3/5 rounded-s lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 lg:mx-0 flex flex-row`}>
                <Image  style={tw`w-28 h-28 mx-2`} source = {data.image}/>

                <View style={tw`flex flex-col mx-2`}>
                    <Text style={tw`text-2xl font-bold lg:pt-0`}>{data.name}</Text>
                    <Text style={tw`text-2xl font-bold lg:pt-0`}>{data.name}</Text>
                    
                </View>
        </View>
        </View>
);

const ResultScreen = () => {
    return (
        <View style={tw`flex flex-col justify-center items-center`}>
            {listHours}
        </View>
    )
}

export default ResultScreen
