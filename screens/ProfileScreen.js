import React , {useState} from 'react'
import { View, Text , StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Button  } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { KeyboardAvoidingView } from 'react-native';
import { Dimensions } from 'react-native';
import { Image , Linking } from 'react-native';


const icons ={
    location:{uri:'https://image.flaticon.com/icons/png/512/684/684850.png'},
    email:{uri:'https://image.flaticon.com/icons/png/512/580/580704.png'}, 
    message:{uri:'https://image.flaticon.com/icons/png/512/893/893268.png'},   
    rate:{uri:'https://image.flaticon.com/icons/png/512/631/631180.png'},   
}


function Student(data) {
    if (data.member.toLowerCase()=='student'){
        return (
        <View style={tw`p-4 md:p-12 text-center lg:text-left`}>
            <View style={tw`block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500`} >
                <Image  style={tw`w-full h-full`} source = {{uri:data.interests}}/>
            </View>
            <Text style={tw`text-4xl font-bold pt-8 `}>{data.first_name}</Text>
            <View style={tw`mx-auto lg:mx-0 w-full pt-3 border-b-2 border-green-500 opacity-25`}></View>
            <Text style={tw`pt-4 text-base font-bold flex items-center justify-center lg:justify-start`}>{data.specialization}</Text>
            <Text style={tw`pt-2 text-gray-600 text-s lg:text-sm flex items-center justify-center lg:justify-start`}><Image  style={tw`h-3 w-3`} source = {icons.location}/> {' '} {data.city}</Text>
            <Text style={tw`pt-2 text-gray-600 text-s lg:text-sm flex items-center justify-center lg:justify-start`}><Image  style={tw`h-3 w-3`} source = {icons.email}/> {' '} {data.email}</Text>
            <Text onPress={()=>{Linking.openURL('tel:'+data.mobile_number);}} style={tw`text-3xl font-bold pt-8  text-blue-700 text-center text-3xl mb-6`}>{data.mobile_number}</Text>
            <Button onPress= {() => Linking.openURL(`mailto:${data.email}`) } title="Send Email" />
        </View>
        )
    }
}

function Educator(data) {
    if (data.member.toLowerCase()=='educator'){
        return (
        <View style={tw`p-4 md:p-12 text-center lg:text-left`}>
            <View style={tw`block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500`} >
                <Image  style={tw`w-full h-full`} source = {{uri:data.interests}}/>
            </View>
            <Text style={tw`text-4xl font-bold pt-8 `}>{data.first_name}</Text>
            <View style={tw`mx-auto lg:mx-0 w-full pt-3 border-b-2 border-green-500 opacity-25`}></View>
            <Text style={tw`pt-4 text-base font-bold flex items-center justify-center lg:justify-start`}>{data.specialization}</Text>
            <Text style={tw`pt-2 text-gray-600 text-s lg:text-sm flex items-center justify-center lg:justify-start`}><Image  style={tw`h-3 w-3`} source = {icons.location}/> {' '} {data.city}</Text>
            <Text style={tw`pt-2 text-gray-600 text-s lg:text-sm flex items-center justify-center lg:justify-start`}><Image  style={tw`h-3 w-3`} source = {icons.email}/> {' '} {data.email}</Text>
            <Text style={tw`pt-2 text-gray-600 text-s lg:text-sm flex items-center justify-center lg:justify-start`}><Image  style={tw`h-3 w-3`} source = {icons.rate}/> {' '} {data.hourly_tutoring_rate}</Text>
            <Text style={tw`pt-8 text-sm`}>{data.biography}</Text>
            <Text  onPress={()=>{Linking.openURL('tel:'+data.mobile_number);}} style={tw`text-3xl font-bold pt-8 text-blue-700 text-center text-3xl mb-6`}>{data.mobile_number}</Text>
            <Button onPress={() => Linking.openURL(`mailto:${data.email}`) }  title="Send Email" />
        </View>
        )
    }
}

function Institute(data) {
    if (data.member.toLowerCase()=='organization'){
        return (
        <View style={tw`p-4 md:p-12 text-center lg:text-left`}>
            <View style={tw`block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500`} >
                <Image  style={tw`w-full h-full`} source = {{uri:data.interests}}/>
            </View>
            <Text style={tw`text-4xl font-bold pt-8`}>{data.first_name}</Text>
            <View style={tw`mx-auto lg:mx-0 w-full pt-3 border-b-2 border-green-500 opacity-25`}></View>
            <Text style={tw`pt-2 text-gray-600 text-s lg:text-sm flex items-center justify-center lg:justify-start`}><Image  style={tw`h-3 w-3`} source = {icons.location}/> {' '} {data.city}</Text>
            <Text style={tw`pt-2 text-gray-600 text-s lg:text-sm flex items-center justify-center lg:justify-start`}><Image  style={tw`h-3 w-3`} source = {icons.email}/> {' '} {data.email}</Text>
            <Text style={tw`pt-8 text-sm`}>{data.summary}</Text>
            <Text  onPress={()=>{Linking.openURL('tel:'+data.mobile_number);}} style={tw`text-3xl font-bold pt-8 text-blue-700 text-center text-3xl mb-6`}>{data.mobile_number}</Text>
            <Button onPress={() => Linking.openURL(`mailto:${data.email}`) }  title="Send Email" />
        </View>
        )
    }
}


const ProfileScreen = ({navigation,route}) => {

    const devHight = Dimensions.get('window').height;
    const devWidth = Dimensions.get('window').width;
    const viewWidth = devWidth > 600? 700 : devWidth
    
    return (
        <View style={tw`flex flex-col items-center`}>
            <View style={{ width:viewWidth,height:devHight}}>
                <View style={tw`flex flex-col items-center mt-5`}>
                <View style={tw`w-full flex flex flex-row bg-blue-100 p-2 justify-around items-center border-b mb-3`}>
                            <Button containerStyle={tw`m-0 `} onPress={() => {navigation.navigate('Home')}} title={'Home'}/>
                            <Button containerStyle={tw`m-0 bg-gray-100 `} type={'outline'}title={'Profile'}/>
                            <Button containerStyle={tw`m-0 `} onPress={() => {navigation.navigate('Search')}} title={'Search'}/>
                            <Button containerStyle={tw`m-0 `} onPress={() => {navigation.navigate('Login')}} title={'Sign Out'}/>
                </View>
            <View style={tw`w-4/5 flex items-center justify-center h-auto lg:h-screen flex-wrap mx-auto my-16 lg:my-0`}>
            <View style={tw`w-full lg:w-3/5  shadow-2xl bg-white opacity-75 lg:mx-0`}>
                <View>
                {Student(route.params.data)}
                {Educator(route.params.data)}
                {Institute(route.params.data)}
                </View>
            </View>
            </View>
            </View>
        
        </View>
        </View>
    )
}

export default ProfileScreen
