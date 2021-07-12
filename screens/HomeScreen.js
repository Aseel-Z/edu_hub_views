import React , {useState} from 'react'
import { StyleSheet,View,ScrollView} from 'react-native'
import { Input, Text, Button,Image  } from 'react-native-elements';
import { Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = ({navigation,route}) => {

    const dd={
        image:{uri:'https://image.flaticon.com/icons/png/512/3135/3135715.png'},
        name:'Person teacher',
        specialization:'Math',
        biography:'math teacher with 10 years experience Totally optional short description about yourself, what you do and so on.',
        city:'Amman',
        email:'tree@udu.com',
        mobile:'075692633'
    }
    const data = [{
        image:{uri:'https://image.flaticon.com/icons/png/512/3135/3135715.png'},
        name:'Person teacher',
        specialization:'Math',
        biography:'math teacher with 10 years experience Totally optional short description about yourself, what you do and so on.',
        city:'Amman',
        email:'tree@udu.com',
        mobile:'075692633'
    },dd,dd,dd,dd,dd,dd,dd,dd,dd,dd,dd]
    const icons ={
        location:{uri:'https://image.flaticon.com/icons/png/512/684/684850.png'},
        email:{uri:'https://image.flaticon.com/icons/png/512/580/580704.png'}, 
        message:{uri:'https://image.flaticon.com/icons/png/512/893/893268.png'},   
    }
    
    const listResult = data.map((result) =>
        <View onPress={()=>{console.log('**')}} style={tw`w-11/12 flex items-center justify-center h-auto lg:h-screen flex-wrap  my-2 lg:my-0 bg-red-200 w-11/12`}>
        <View style={tw`p-2 w-full lg:w-3/5 rounded-s lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 lg:mx-0 flex flex-row`}>
                <Image  style={tw`w-28 h-28 mx-2`} source = {result.image}/>
                <View style={tw`flex flex-col mx-2`}>
                    <Text style={tw`text-2xl font-bold lg:pt-0`}>{result.name}</Text>
                    <View style={tw`flex flex-row mx-2 justify-center items-center`}>
                        <View style={tw`flex flex-col mx-2 `}>
                            <Text style={tw`pt-2 text-gray-600 text-s lg:text-sm flex items-center justify-center lg:justify-start`}><Image  style={tw`h-3 w-3`} source = {icons.location}/> {' '} {result.city}</Text>
                            <Text style={tw`pt-2 text-blue-800 text-s lg:text-sm flex items-center justify-center lg:justify-start`}> {result.specialization}</Text>
                        </View>
                        <Button containerStyle={tw`w-32 h-8`} title="View Profile" />
                    </View>
                </View>
        </View>
        </View>
    );

    const devHight = Dimensions.get('window').height;
    const devWidth = Dimensions.get('window').width;
    const viewWidth = devWidth > 600? 700 : devWidth
    const [post,setPost] = useState("")

    const addPost = ()=>{

    }

    return (
        <View style={styles.container}>
            <View style={{ width:viewWidth,height:devHight}}>
                <View style={tw`mt-4 flex flex-col items-center`}>
                    <View style={tw`flex cursor-pointer flex flex-row`}>
                        <Button style={tw`mr-1`} type={'outline'}title={'Home'}/>
                        <Button style={tw`mr-1`} title={'Profile'}/>
                        <Button style={tw`mr-1`} title={'Search'}/>
                        <Button style={tw`mr-1`} title={'Sign Out'}/>
                    </View>
                </View>
                <View style={tw`w-full h-full flex flex-col items-center mt-10`}>
                    <View style={tw`h-1/3 w-11/12 bg-blue-300 rounded-lg flex flex-row justify-around `}>
                        <View style={tw`h-5/6 w-2/6 flex flex-col items-center justify-around `}>
                            <Image style={styles.img} source={{uri:"https://image.flaticon.com/icons/png/512/3135/3135715.png"}}/>
                            <View style={tw`h-1/2 w-11/12 bg-blue-200 rounded-lg flex flex-col justify-around items-center`}>
                                <Text style={styles.text} >Name:</Text>
                                <Text style={styles.text} >Hisham</Text>
                                <Text style={styles.text} >Location:</Text>
                                <Text style={styles.text} >Amman</Text>
                            </View>
                        </View>
                        <View style={tw`h-5/6 w-4/6 flex flex-col items-center justify-around`}>
                            <Input containerStyle={tw`w-11/12 bg-gray-100 mt-10 rounded-lg`}
                                placeholder="Post"
                                autoFocus 
                                type="text"
                                value={post}
                                multiline={true}
                                onChangeText={(text)=>{setPost(text)}}
                            />
                            <Button onPress={addPost}  title="     post     "/>
                        </View>
                    </View>
                    <View style={tw`h-2/5 w-11/12 bg-blue-300 rounded-lg flex flex-col justify-center items-center  mt-3`}>
                        <View style={tw`h-full w-11/12 border`}>
                            <View style={tw`h-full flex flex-col justify-center items-center`}>
                                <ScrollView style={tw`h-full w-full `} >
                                    <View style={tw`w-full flex flex-col justify-center items-center`}>
                                        {listResult}
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:tw`flex items-center`,
    img:{
        width:100 , 
        height:100 ,
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    },
})

export default HomeScreen


// {console.log(route.params.username),console.log(route.params.pass)}

