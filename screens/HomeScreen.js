import React , {useState} from 'react'
import { StyleSheet,View} from 'react-native'
import { Input, Text, Button,Image  } from 'react-native-elements';
import { Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = ({navigation,route}) => {
    
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
                        <View style={tw`h-11/12 w-2/6 flex flex-col items-center justify-around `}>
                            <Image style={styles.img} source={{uri:"https://image.flaticon.com/icons/png/512/3135/3135715.png"}}/>
                            <View style={tw`h-1/2 w-11/12 bg-blue-200 rounded-lg flex flex-col justify-around items-center`}>
                                <Text style={styles.text} >Name:</Text>
                                <Text style={styles.text} >Hisham</Text>
                                <Text style={styles.text} >Location:</Text>
                                <Text style={styles.text} >Amman</Text>
                            </View>
                        </View>
                        <View style={tw`h-11/12 w-4/6 flex flex-col items-center justify-around`}>
                            <Input containerStyle={tw`h-11/12 w-11/12 bg-gray-100 mt-10 rounded-lg`}
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
                </View>
                <View style={tw`w-full h-full flex flex-col items-center mt-10`}>

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

