import React , {useState} from 'react'
import { View, Text , StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
// import { Input , Image  } from 'react-native-elements';
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



const ProfileScreen = () => {

    // my-32  --view 2
    
    return (
        <View style={tw`flex flex-col justify-center items-center`}>
        <View style={tw`w-4/5 flex items-center justify-center h-auto lg:h-screen flex-wrap mx-auto my-16 lg:my-0`}>
    
        <View style={tw`w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 lg:mx-0`}>
        
    
            <View style={tw`p-4 md:p-12 text-center lg:text-left`}>
                
                <View style={tw`block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500`} >
                    <Image  style={tw`w-full h-full`} source = {data.image}/>
                </View>
                <Text style={tw`text-4xl font-bold pt-8 lg:pt-0`}>{data.name}</Text>
                <View style={tw`mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25`}></View>
                <Text style={tw`pt-4 text-base font-bold flex items-center justify-center lg:justify-start`}>{data.specialization}</Text>
                <Text style={tw`pt-2 text-gray-600 text-s lg:text-sm flex items-center justify-center lg:justify-start`}><Image  style={tw`h-3 w-3`} source = {icons.location}/> {' '} {data.city}</Text>
                <Text style={tw`pt-2 text-gray-600 text-s lg:text-sm flex items-center justify-center lg:justify-start`}><Image  style={tw`h-3 w-3`} source = {icons.email}/> {' '} {data.email}</Text>
                <Text style={tw`pt-8 text-sm`}>{data.biography} {'555'}</Text>

                <Text style={tw`text-3xl font-bold pt-8 lg:pt-0 text-blue-700 text-center text-3xl`}>{data.mobile}</Text>

                <View style={tw`pt-12 pb-8`}>
                <Text style={tw`border-2 border-blue-800 rounded pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start`}><Image  style={tw`h-3 w-3`} source = {icons.message}/> {' Send Message'} </Text>
                </View>
                
            </View>

        

        </View>
        </View>

        </View>
        
    )
}

export default ProfileScreen


