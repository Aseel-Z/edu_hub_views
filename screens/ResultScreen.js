import React , {useState} from 'react'
import { View, Text , StyleSheet , ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import tw from 'tailwind-react-native-classnames';
import { KeyboardAvoidingView } from 'react-native';
import {Image } from 'react-native';
import {  Button  } from 'react-native-elements';


const dd={
    member_type : 'student',
    image:{uri:'https://image.flaticon.com/icons/png/512/3135/3135715.png'},
    name:'Student',
    interest :'Math',
    city:'Amman',
    email:'tree@edu.com',
    mobile:'075692633'
}

const dd2={
    member_type : 'educator',
    image:{uri:'https://image.flaticon.com/icons/png/512/3135/3135715.png'},
    name:'Person teacher-2',
    specialization:'History',
    biography:'math teacher with 10 years experience Totally optional short description about yourself, what you do and so on.',
    city:'Amman',
    email:'tree@udu.com',
    mobile:'075692633',
    hourly_tutoring_rate:'1-2 JD'
}

const dd3={
    member_type : 'institute',
    image:{uri:'https://image.flaticon.com/icons/png/512/3135/3135715.png'},
    name:'School',
    summary:'math teacher with 10 years experience Totally optional short description about yourself, what you do and so on.',
    city:'Amman',
    email:'tree@udu.com',
    mobile:'075692633'
}

const data = [dd,dd2,dd3,dd,dd,dd,dd,dd,dd,dd,dd]

const icons ={
    location:{uri:'https://image.flaticon.com/icons/png/512/684/684850.png'},
    email:{uri:'https://image.flaticon.com/icons/png/512/580/580704.png'}, 
    message:{uri:'https://image.flaticon.com/icons/png/512/893/893268.png'},   
}


const ResultScreen = ({navigation,route}) => {
    
    const listResult = data.map((result) =>
        <View onPress={()=>{console.log('**')}} style={tw`w-11/12 flex items-center justify-center h-auto lg:h-screen flex-wrap  my-2 lg:my-0 bg-red-200 w-11/12`}>
        <View style={tw`p-2 w-full lg:w-3/5 rounded-s lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 lg:mx-0 flex flex-row`}>
                <Image  style={tw`w-28 h-28 mx-2`} source = {result.image}/>

                <View style={tw`flex flex-col mx-2`}>
                    <Text style={tw`text-2xl font-bold lg:pt-0`}>{result.name}</Text>

                    <View style={tw`flex flex-row mx-2 justify-center items-center`}>
                    
                        <View style={tw`flex flex-col mx-2`}>
                            <Text style={tw`pt-2 text-gray-600 text-s lg:text-sm flex items-center justify-center lg:justify-start`}><Image  style={tw`h-3 w-3`} source = {icons.location}/> {' '} {result.city}</Text>
                            <Text style={tw`pt-2 text-blue-800 text-s lg:text-sm flex items-center justify-center lg:justify-start`}> {result.specialization}</Text>
                        </View>
                        

                        <Button onPress={()=>{navigation.navigate('Profile',{data:result})}} style={tw`w-32 h-32 py-28`} title="View Profile" />
                    </View>
                </View>
               
        </View>
        </View>
);

    return (
        <View style={tw`flex flex-col justify-center items-center`}>
            <ScrollView style={tw`w-full `} >
                <View style={tw`w-full flex flex-col justify-center items-center`}>
                    {listResult}
                </View>
            </ScrollView>
        </View>
    )
}

export default ResultScreen
