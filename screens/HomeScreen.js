import React , {useState} from 'react'
import { StyleSheet,View,ScrollView} from 'react-native'
import { Input, Text, Button,Image  } from 'react-native-elements';
import { Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';


const HomeScreen = ({navigation,route}) => {
    
    const dd={
        image:{uri:'https://image.flaticon.com/icons/png/512/3135/3135715.png'},
        name:route.params.username,
        specialization:'Math',
        biography:'math teacher with 10 years experience Totally optional short description about yourself, what you do and so on.',
        city:'Amman',
        email:'tree@udu.com',
        mobile:'075692633',
        post:'kksjah lldldkdjkduuajjsk nnndkkd/n kksjjssooosueje jhhhsjskkdkdl kkkkkkkllffkkhkh kksjah lldldkdjkduuajjsk ',
        member_type:'educator'
    }

    const data = [dd,dd,dd,dd,dd,dd,dd,dd,dd,dd,dd]

    const icons ={
        location:{uri:'https://image.flaticon.com/icons/png/512/684/684850.png'},
        email:{uri:'https://image.flaticon.com/icons/png/512/580/580704.png'}, 
        message:{uri:'https://image.flaticon.com/icons/png/512/893/893268.png'},   
    }
    
    const listResult = data.map((result,index) =>
        <View key={index} style={tw`w-11/12 flex items-center justify-center flex-wrap my-2 my-0 w-11/12`}>
            <View style={tw`p-2 w-full rounded-l-lg rounded-r-none shadow-2xl bg-white opacity-75 mx-0 flex flex-col mt-5 `}>    
                <View style={tw`flex flex-row`}>
                    <View style={tw`flex flex-col mx-2 items-start justify-start`}>
                        <Image onPress={()=>{navigation.navigate('Profile',{data:result})}} style={styles.img2} source = {result.image}/>
                    </View>
                    <View style={tw`flex flex-col items-start justify-around`}>
                        <Text style={tw`text-lg font-bold pt-0`}>{result.name}</Text>
                        <View style={tw`w-11/12`} >
                            <ScrollView style={tw`w-11/12 mb-1`}>
                                <Text style={tw`pt-2 text-blue-800 text-sm flex items-center justify-center justify-start`}> {result.post}</Text>
                            </ScrollView>
                        </View>
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
        console.log(post)
    }

    const refresh = () =>{
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <View style={{ width:viewWidth,height:devHight}}>
                <View style={tw`mt-4 flex flex-col bg-blue-300 items-center pb-2 rounded-lg`}>
                    <View style={tw`w-full flex flex flex-row bg-blue-100 p-2 justify-around items-center border-b mb-3`}>
                        <Button containerStyle={tw`m-0 bg-gray-100 `} onPress={refresh} type={'outline'}title={'Home'}/>
                        <Button containerStyle={tw`m-0 `} onPress={() => {navigation.navigate('Profile')}} title={'Profile'}/>
                        <Button containerStyle={tw`m-0 `} onPress={() => {navigation.navigate('Search')}} title={'Search'}/>
                        <Button containerStyle={tw`m-0 `} onPress={() => {navigation.navigate('Login')}} title={'Sign Out'}/>
                    </View>
                    <View style={tw`w-11/12 rounded-lg flex flex-row justify-between items-center`}>
                            <Image style={styles.img} source={{uri:"https://image.flaticon.com/icons/png/512/3135/3135715.png"}}/>
                           <View style={tw`w-full flex flex-col items-center justify-around pb-1`}>
                                <Input containerStyle={tw`w-4/5 bg-gray-100 border rounded-md`}
                                    placeholder="Post"
                                    autoFocus 
                                    type="text"
                                    value={post}
                                    multiline={true}
                                    onChangeText={(text)=>{setPost(text)}}
                                />
                                <Button containerStyle={tw`w-4/5 rounded-md`} onPress={addPost}  title="post"/>
                           </View>
                    </View>
                </View>
                <View style={tw`w-full h-full flex flex-col items-center mt-5`}>
                    <View style={tw`h-1/2 w-11/12 bg-blue-300 rounded-lg flex flex-col justify-center items-center  mt-5`}>
                        <View style={tw`h-full w-11/12`}>
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
        width:60 , 
        height:60 ,
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    },
    img2:{
        width:30 , 
        height:30 ,
    }
})

export default HomeScreen


// {console.log(route.params.username),console.log(route.params.pass)}

{/* <View style={tw`h-1/3 w-11/12 bg-blue-300 rounded-lg flex flex-row justify-around items-center`}>
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
</View> */}