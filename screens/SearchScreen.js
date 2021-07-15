import React , {useState} from 'react'
import { View, Text , StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Button  } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { Image , Linking , CheckBox, ScrollView} from 'react-native';
import { get_member_data } from '../services/api';


const icons ={
    location:{uri:'https://image.flaticon.com/icons/png/512/684/684850.png'},
    email:{uri:'https://image.flaticon.com/icons/png/512/580/580704.png'}, 
    message:{uri:'https://image.flaticon.com/icons/png/512/893/893268.png'},   
    rate:{uri:'https://image.flaticon.com/icons/png/512/631/631180.png'}, 
    search_icon:{uri:'https://image.flaticon.com/icons/png/512/3077/3077325.png'}  
}



const bt_on=tw`bg-blue-800  border-2 border-gray-400 p-1 m-1 rounded`
const bt_off = tw`bg-blue-100  border-2 border-gray-400 p-1 m-1 rounded`


const SearchScreen = ({navigation,route}) => {
    // specialization variable
    const [option_1_1, setOption_1_1] = useState(true);
    const [option_1_2, setOption_1_2] = useState(false);
    const [option_1_3, setOption_1_3] = useState(false);
    const [option_1_4, setOption_1_4] = useState(false);
    const [option_1_5, setOption_1_5] = useState(false);
    const [option_1_6, setOption_1_6] = useState(false);
    const [option_1_7, setOption_1_7] = useState(false);
    const [option_1_8, setOption_1_8] = useState(false);
    const [option_1_9, setOption_1_9] = useState(false);

    // Location variable
    const [option_2_1, setOption_2_1] = useState(true);
    const [option_2_2, setOption_2_2] = useState(false);
    const [option_2_3, setOption_2_3] = useState(false);
    const [option_2_4, setOption_2_4] = useState(false);
    const [option_2_5, setOption_2_5] = useState(false);
    const [option_2_6, setOption_2_6] = useState(false);
    const [option_2_7, setOption_2_7] = useState(false);
    const [option_2_8, setOption_2_8] = useState(false);
    const [option_2_9, setOption_2_9] = useState(false);
    const [option_2_10, setOption_2_10] = useState(false);
    const [option_2_11, setOption_2_11] = useState(false);
    const [option_2_12, setOption_2_12] = useState(false);
    const [option_2_13, setOption_2_13] = useState(false);

    // Gender variable
    const [option_3_1, setOption_3_1] = useState(true);
    const [option_3_2, setOption_3_2] = useState(false);
    const [option_3_3, setOption_3_3] = useState(false);

    // Rate variable
    const [option_4_1, setOption_4_1] = useState(true);
    const [option_4_2, setOption_4_2] = useState(false);
    const [option_4_3, setOption_4_3] = useState(false);
    const [option_4_4, setOption_4_4] = useState(false);
    const [option_4_5, setOption_4_5] = useState(false);
    const [option_4_6, setOption_4_6] = useState(false);


    const filter_data = () =>{
        get_member_data('login/show_members/').then((res)=>{
            let result = []
            let person ;
            const persons = res.data
            for (let i= 0;i<persons.length;i++){
                person = persons[i]
                if (person.member != null){
                    let limit_1 = false
                    let limit_2 = false
                    let limit_3 = false
                    let limit_4 = false
                    
                    // check select all
                    if(option_1_1){
                        limit_1= true
                    }
                    if(option_2_1){
                        limit_2= true
                    }
                    if(option_3_1){
                        limit_3= true
                    }
                    if(option_4_1){
                        limit_4= true
                    }
                    // check specialization limit
                    if(option_1_2){
                        if(person.specialization=='Computer Science'){
                            limit_1= true
                        }     
                    }
                    if(option_1_3){
                        if(person.specialization=='Science'){
                            limit_1= true
                        }     
                    }
                    if(option_1_4){
                        console.log(option_1_4)
                        if(person.specialization=='History'){
                            limit_1= true
                        }     
                    }
                    if(option_1_5){
                        if(person.specialization=='Computer'){
                            limit_1= true
                        }     
                    }
                    if(option_1_6){
                        if(person.specialization=='Chemistry'){
                            limit_1= true
                        }     
                    }
                    if(option_1_7){
                        if(person.specialization=='Physics'){
                            limit_1= true
                        }     
                    }
                    if(option_1_8){
                        if(person.specialization=='Geography'){
                            limit_1= true
                        }     
                    }
                    if(option_1_9){
                        if(person.specialization=='Other'){
                            limit_1= true
                        }     
                    }

                    // check Location limit
                    if(option_2_2){
                        console.log(option_2_2)
                        if(person.city=='Amman'){
                            limit_2= true
                        }     
                    }
                    if(option_2_3){
                        if(person.city=='Zarqa'){
                            limit_2= true
                        }     
                    }
                    if(option_2_4){
                        if(person.city=='Irbid'){
                            limit_2= true
                        }     
                    }
                    if(option_2_5){
                        if(person.city=='Balqa'){
                            limit_2= true
                        }     
                    }
                    if(option_2_6){
                        if(person.city=='Ajloun'){
                            limit_2= true
                        }     
                    }
                    if(option_2_7){
                        if(person.city=='Jerash'){
                            limit_2= true
                        }     
                    }
                    if(option_2_8){
                        if(person.city=='Mafraq'){
                            limit_2= true
                        }     
                    }
                    if(option_2_9){
                        if(person.city=='Madaba'){
                            limit_2= true
                        }     
                    }
                    if(option_2_10){
                        if(person.city=='Karak'){
                            limit_2= true
                        }     
                    }
                    if(option_2_11){
                        if(person.city=='Tafilah'){
                            limit_2= true
                        }     
                    }
                    if(option_2_12){
                        if(person.city=='Maan'){
                            limit_2= true
                        }     
                    }
                    if(option_2_13){
                        if(person.city=='Aqaba'){
                        
                            limit_2= true
                        }     
                    }
                    // check gender limit
                    if(option_3_2){
                        if(person.gender=='Male'){
                            limit_3= true
                        }     
                    }
                    if(option_3_3){
                        if(person.gender=='Female'){
                            limit_3= true
                        }     
                    }
                    // check specialization limit
                    if(option_4_2){
                        if(person.hourly_tutoring_rate<10){
                            limit_4= true
                        }     
                    }
                    if(option_4_3){
                        if(person.hourly_tutoring_rate>=10 && person.hourly_tutoring_rate<=20){
                            limit_4= true
                        }     
                    }
                    if(option_4_4){
                        if(person.hourly_tutoring_rate>=20 && person.hourly_tutoring_rate<=30){
                            limit_4= true
                        }     
                    }
                    if(option_4_5){
                        if(person.hourly_tutoring_rate>=30 && person.hourly_tutoring_rate<=40){
                            limit_4= true
                        }     
                    }
                    if(option_4_6){
                        if(person.hourly_tutoring_rate>=40 && person.hourly_tutoring_rate<=50){
                            limit_4= true
                        }     
                    }
                    if (limit_1 && limit_2 && limit_3 && limit_4){
                        result.push(person)
                    }
                    console.log(result)
                }
            }
            const navigate = ()=>{navigation.navigate('Result',{data:result})}
            navigate()
        })
    }

   

    return (
        <View style={tw`flex flex-col justify-center items-center`}>
        <View style={tw`w-4/5 flex items-center justify-center h-auto lg:h-screen flex-wrap mx-auto my-16 lg:my-0`}>
        <View style={tw`w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 lg:mx-0`}>
            <View style={tw`p-4 md:p-12 text-center lg:text-left`}>
                <View style={tw`block shadow-xl mx-auto -mt-16 h-32 w-32 bg-cover bg-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500`} >
                    <Image  style={tw`w-full h-full`} source = {icons.search_icon}/>
                </View>


                <ScrollView style={tw`w-full`} >
                    <View style={tw`w-full flex flex-col justify-center items-center`}>
                        

                    <Text style={tw`mt-4`} style={tw`text-base`}>Select specialization</Text>

                    <View style={tw`mx-auto lg:mx-0 w-full pt-3 border-b-2 border-blue-800 opacity-25`}></View>
                    <ScrollView horizontal={true} style={tw`w-full`} >
                        <View style={tw`flex flex-row `}>
                            <Text onPress={()=>{option_1_1?setOption_1_1(false):setOption_1_1(true)}} style={option_1_1?bt_on:bt_off}>All</Text>
                            <Text onPress={()=>{option_1_2?setOption_1_2(false):setOption_1_2(true)}} style={option_1_2?bt_on:bt_off}>Computer Science</Text>
                            <Text onPress={()=>{option_1_3?setOption_1_3(false):setOption_1_3(true)}} style={option_1_3?bt_on:bt_off}>Science</Text>
                            <Text onPress={()=>{option_1_4?setOption_1_4(false):setOption_1_4(true)}} style={option_1_4?bt_on:bt_off}>History</Text>
                            <Text onPress={()=>{option_1_5?setOption_1_5(false):setOption_1_5(true)}} style={option_1_5?bt_on:bt_off}>Computer</Text>
                            <Text onPress={()=>{option_1_6?setOption_1_6(false):setOption_1_6(true)}} style={option_1_6?bt_on:bt_off}>Chemistry</Text>
                            <Text onPress={()=>{option_1_7?setOption_1_7(false):setOption_1_7(true)}} style={option_1_7?bt_on:bt_off}>Physics</Text>
                            <Text onPress={()=>{option_1_8?setOption_1_8(false):setOption_1_8(true)}} style={option_1_8?bt_on:bt_off}>Geography</Text>
                            <Text onPress={()=>{option_1_9?setOption_1_9(false):setOption_1_9(true)}} style={option_1_9?bt_on:bt_off}>Other</Text>
                            
                        </View>
                    </ScrollView>

                    
                    <Text style={tw`mt-4`}>Select Location</Text>
                    <View style={tw`mx-auto lg:mx-0 w-full pt-3 border-b-2 border-blue-800 opacity-25`}></View>
                    <ScrollView horizontal={true} style={tw`w-full`} >
                    <View style={tw`flex flex-row flex-wrap`}>

                        <Text onPress={()=>{
                        if(option_2_1){
                            setOption_2_1(false)
                        }else{
                            setOption_2_1(true)
                            setOption_2_2(false)
                            setOption_2_3(false)
                            setOption_2_4(false)
                            setOption_2_5(false)
                            setOption_2_6(false)
                            setOption_2_7(false)
                            setOption_2_8(false)
                            setOption_2_9(false)
                            setOption_2_10(false)
                            setOption_2_11(false)
                            setOption_2_12(false)
                            setOption_2_13(false)

                        }
                        }} style={option_2_1?bt_on:bt_off}>All</Text>
                        <Text onPress={()=>{option_2_2?setOption_2_2(false):setOption_2_2(true)}} style={option_2_2?bt_on:bt_off}>Amman</Text>
                        <Text onPress={()=>{option_2_3?setOption_2_3(false):setOption_2_3(true)}} style={option_2_3?bt_on:bt_off}>Zarqa</Text>
                        <Text onPress={()=>{option_2_4?setOption_2_4(false):setOption_2_4(true)}} style={option_2_4?bt_on:bt_off}>Irbid</Text>
                        <Text onPress={()=>{option_2_5?setOption_2_5(false):setOption_2_5(true)}} style={option_2_5?bt_on:bt_off}>Balqa</Text>
                        <Text onPress={()=>{option_2_6?setOption_2_6(false):setOption_2_6(true)}} style={option_2_6?bt_on:bt_off}>Ajloun</Text>

                        <Text onPress={()=>{option_2_7?setOption_2_7(false):setOption_2_7(true)}} style={option_2_7?bt_on:bt_off}>Jerash</Text>
                        <Text onPress={()=>{option_2_8?setOption_2_8(false):setOption_2_8(true)}} style={option_2_8?bt_on:bt_off}>Mafraq</Text>
                        <Text onPress={()=>{option_2_9?setOption_2_9(false):setOption_2_9(true)}} style={option_2_9?bt_on:bt_off}>Madaba</Text>
                        <Text onPress={()=>{option_2_10?setOption_2_10(false):setOption_2_10(true)}} style={option_2_10?bt_on:bt_off}>Karak</Text>
                        <Text onPress={()=>{option_2_11?setOption_2_11(false):setOption_2_11(true)}} style={option_2_11?bt_on:bt_off}>Tafilah</Text>
                        <Text onPress={()=>{option_2_12?setOption_2_12(false):setOption_2_12(true)}} style={option_2_12?bt_on:bt_off}>Maan</Text>
                        <Text onPress={()=>{option_2_13?setOption_2_13(false):setOption_2_13(true)}} style={option_2_13?bt_on:bt_off}>Aqaba</Text>
                        
                    </View>
                    </ScrollView>

                    
                    <Text style={tw`mt-4`}>Select gender</Text>
                    <View style={tw`mx-auto lg:mx-0 w-full pt-3 border-b-2 border-blue-800 opacity-25`}></View>
                    <ScrollView horizontal={true} style={tw`w-full`} >
                    <View style={tw`flex flex-row flex-wrap`}>
                        <Text onPress={()=>{option_3_1?setOption_3_1(false):setOption_3_1(true)}} style={option_3_1?bt_on:bt_off}>All</Text>
                        <Text onPress={()=>{option_3_2?setOption_3_2(false):setOption_3_2(true)}} style={option_3_2?bt_on:bt_off}>Male</Text>
                        <Text onPress={()=>{option_3_3?setOption_3_3(false):setOption_3_3(true)}} style={option_3_3?bt_on:bt_off}>Female</Text>
                        
                        
                    </View>
                    </ScrollView>

                    
                    <Text style={tw`mt-4`} >Hourly tutoring range</Text>
                    <View style={tw`mx-auto lg:mx-0 w-full pt-3 border-b-2 border-blue-800 opacity-25`}></View>
                    <ScrollView horizontal={true} style={tw`w-full`} >
                    
                    <View style={tw`flex flex-row flex-wrap`}>
                        <Text onPress={()=>{option_4_1?setOption_4_1(false):setOption_4_1(true)}} style={option_4_1?bt_on:bt_off}>All</Text>
                        <Text onPress={()=>{option_4_2?setOption_4_2(false):setOption_4_2(true)}} style={option_4_2?bt_on:bt_off}>0-10JD</Text>
                        <Text onPress={()=>{option_4_3?setOption_4_3(false):setOption_4_3(true)}} style={option_4_3?bt_on:bt_off}>10-20JD</Text>
                        <Text onPress={()=>{option_4_4?setOption_4_4(false):setOption_4_4(true)}} style={option_4_4?bt_on:bt_off}>20-30JD</Text>
                        <Text onPress={()=>{option_4_5?setOption_4_5(false):setOption_4_5(true)}} style={option_4_5?bt_on:bt_off}>30-40JD</Text>
                        <Text onPress={()=>{option_4_6?setOption_4_6(false):setOption_4_6(true)}} style={option_4_6?bt_on:bt_off}>40-50JD</Text>
                    </View>
                    </ScrollView>

                    <Button containerStyle={tw`mt-8`} onPress={filter_data} title="Search" />

            </View>
            </ScrollView>
               
            </View>
        </View>
        </View>
        </View>
    )
}



const styles = StyleSheet.create({
    tw_text:tw`bg-gray-800`,
    tw_1_1 : bt_off,
    tw_1_2 : bt_off,
    tw_1_3 : bt_off,
    tw_1_4 : bt_off,
  });


export default SearchScreen
