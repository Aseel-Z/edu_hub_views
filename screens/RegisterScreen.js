import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, KeyboardAvoidingView,ScrollView,SafeAreaView } from 'react-native'
import { Input, Button, Text } from 'react-native-elements';
import { Dimensions , CheckBox } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { create_data, getToken, sign } from '../services/api';
const RegisterScreen = ({navigation,route}) => {
    
    
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [full_name,setFull_name] = useState(""); // full name in first_name felid
    const [specialization,setSpecialization] = useState("");
    const [city,setCity] = useState("");
    const [mobile_number,setMobile_number] = useState("");
    const [biography,setBiography] = useState("");
    const [hourly_tutoring_rate,setHourly_tutoring_rate] = useState("");
    const [image_url,setImage_url] = useState("");
    
    
    const [isSelected_1, setSelection_1] = useState(true);
    const [isSelected_2, setSelection_2] = useState(false);
    const [isSelected_3, setSelection_3] = useState(false);

    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    
    const register = () =>{
        let gender = 'M'
        if (female){
            gender = 'F'
        }

        let member = 'STUDENT'
        if (isSelected_2){
            member='EDUCATOR'
        }

        if (isSelected_3){
            member='ORGANIZATION'
        }
        
        // username="string" password="string" email=any@example.com first_name="string" city="cities_options" member="member_type" specialization="string"
        // interests="string" biography="string" hourly_tutoring_rate=integer mobile_number="" organization_summary="string" gender=M/F
        // let imageUrl = image_url
        // if(imageUrl=""){
        //     imageUrl='https://image.flaticon.com/icons/png/512/3135/3135715.png'
        // }
        const data={
            username:user,
            password:password,
            email:email,
            first_name:full_name,
            city:city,
            member:member,
            specialization:specialization,
            interests:image_url,
            biography:biography,
            hourly_tutoring_rate:parseInt(hourly_tutoring_rate),
            mobile_number:mobile_number,
            organization_summary:'',
            gender:gender,
        }
        sign('signup/',data).then((res)=>{
                navigation.navigate('Home');
                console.log(res)
            
            
        }).catch((error)=>{
            console.log(error)
        })
    
    }
    const change_1=()=> {
        if (isSelected_1){
            setSelection_1(false)
        }else{
            setSelection_1(true)
            setSelection_2(false)
            setSelection_3(false)
        }
    }
    const change_2=()=> {
        if (isSelected_2){
            setSelection_2(false)
        }else{
            setSelection_1(false)
            setSelection_2(true)
            setSelection_3(false)
        }
    }
    const change_3=()=> {
        if (isSelected_3){
            setSelection_3(false)
        }else{
            setSelection_1(false)
            setSelection_2(false)
            setSelection_3(true)
        }
    }

    

    const change_male=()=> {
        if (male){
            setMale(false)
        }else{
            setMale(true)
            setFemale(false)
        }
    }
    const change_female=()=> {
        if (female){
            setFemale(false)
        }else{
            setFemale(true)
            setMale(false)
        }
    }


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{marginBottom:30}} >
                Create Account 
            </Text>
            <SafeAreaView style={{height:500}}>
                     <View style={tw`flex flex-row justify-around mb-4`} >
                        
                        <CheckBox
                        value={isSelected_1}
                        onValueChange={change_1}
                        title="Teacher"
                        />
                        <Text>Student</Text>
                    
                        <CheckBox
                        value={isSelected_2}
                        onValueChange={change_2}
                        title="Student"
                        />
                        <Text>Teacher</Text>
                        <CheckBox
                        value={isSelected_3}
                        onValueChange={change_3}
                        title="Organization"
                        />
                        <Text>Organization</Text>
                    
                    </View>  
                <ScrollView style={styles.inputContainer}>
                        <Input
                        style={{marginBottom:10}}
                        placeholder="User Name"
                        autoFocus 
                        type="text"
                        value={user}
                        onChangeText={(text)=>{setUser(text);route.params.setUsername(user)}}
                        />
                        <Input
                        style={{marginBottom:10}}
                        placeholder="password"
                        autoFocus
                        secureTextEntry 
                        type="password"
                        value={password}
                        onChangeText={(text)=>{setPassword(text);route.params.setPass(password)}}
                        />
                        <Input
                        style={{marginBottom:10}}
                        placeholder="Email"
                        autoFocus 
                        type="email"
                        value={email}
                        onChangeText={(text)=>{setEmail(text)}}
                        />
                         <Input
                        style={{marginBottom:10}}
                        placeholder="Full name"
                        autoFocus 
                        type="text"
                        value={full_name}
                        onChangeText={(text)=>{setFull_name(text)}}
                        />
                        <Input
                        style={{marginBottom:10}}
                        placeholder="Specialization"
                        autoFocus 
                        type="text"
                        value={specialization}
                        onChangeText={(text)=>{setSpecialization(text)}}
                        />
                        <Input
                        style={{marginBottom:10}}
                        placeholder="City"
                        autoFocus 
                        type="text"
                        value={city}
                        onChangeText={(text)=>{setCity(text)}}
                        />
                        <Input
                        style={{marginBottom:10}}
                        placeholder="Biography"
                        autoFocus 
                        type="text"
                        value={biography}
                        onChangeText={(text)=>{setBiography(text)}}
                        />
                        <Input
                        style={{marginBottom:10}}
                        placeholder="hourly tutoring rate"
                        autoFocus 
                        type="number"
                        value={hourly_tutoring_rate}
                        onChangeText={(text)=>{setHourly_tutoring_rate(text)}}
                        />

                        <Input
                        style={{marginBottom:10}}
                        placeholder="Mobile number"
                        autoFocus 
                        type="number"
                        value={mobile_number}
                        onChangeText={(text)=>{setMobile_number(text)}}
                        />

                        <Input
                        style={{marginBottom:10}}
                        placeholder="Image url"
                        autoFocus 
                        type="text"
                        value={image_url}
                        onChangeText={(text)=>{setImage_url(text)}}
                        />


                        <View style={tw`flex flex-row mb-4`} >
                            <CheckBox
                            value={male}
                            onValueChange={change_male}
                            title="Male"
                            />
                            <Text style={tw`ml-4 mr-4`}>Male</Text>
                            <CheckBox
                            value={female}
                            onValueChange={change_female}
                            title="Female"
                            />
                        <Text style={tw`ml-4`}>Female</Text>
                    
                    </View>
                          
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

