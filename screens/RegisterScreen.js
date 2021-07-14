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
    const [interest,setInterest] = useState("");
    const [city,setCity] = useState("");
    const [mobile_number,setMobile_number] = useState("");
    const [biography,setBiography] = useState("");
    const [hourly_tutoring_rate,setHourly_tutoring_rate] = useState("");
    
    const [isSelected_1, setSelection_1] = useState(true);
    const [isSelected_2, setSelection_2] = useState(false);
    const [isSelected_3, setSelection_3] = useState(false);
    
    const register = () =>{
        sign(user,password,email,'signup/').then((res)=>{
                navigation.navigate('Home');
            create_data(user,password,'','data').then((res)=>{
                
            }).catch((error)=>{
                console.log('error')
            })
            
            
        }).catch((error)=>{
            console.log('the error is :')
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
                        placeholder="interest"
                        autoFocus 
                        type="text"
                        value={interest}
                        onChangeText={(text)=>{setInterest(text)}}
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
                        type="text"
                        value={hourly_tutoring_rate}
                        onChangeText={(text)=>{setHourly_tutoring_rate(text)}}
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


// const devWidth = Dimensions.get('window').width;

// const [user,setUser] = useState("");
// const [password,setPassword] = useState("");
// const [email,setEmail] = useState("");

// const [isSelected, setSelection] = useState(false);

// const [name,setName] = useState("");

// const [full_name,setFull_name] = useState(""); // full name in first_name felid
// const [interest,setInterest] = useState("");
// const [city,setCity] = useState("");
// const [mobile_number,setMobile_number] = useState("");
// const [biography,setBiography] = useState("");
// const [hourly_tutoring_rate,setHourly_tutoring_rate] = useState("");


{/* <View >
                        
    <CheckBox
    value={isSelected}
    onValueChange={setSelection(true)}
    style={styles.checkbox}
    title="Student"
    />

    <CheckBox
    value={isSelected}
    onValueChange={setSelection}
    style={styles.checkbox}
    title="Teacher"
    />

    <CheckBox
    value={isSelected}
    onValueChange={setSelection}
    style={styles.checkbox}
    title="Organization"
    />

</View> */}