import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Input, Text, Button, Image } from 'react-native-elements';
import { Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { get_member_data, sign } from '../services/api';


const HomeScreen = ({ navigation, route }) => {

    
    const devHight = Dimensions.get('window').height;
    const devWidth = Dimensions.get('window').width;
    const viewWidth = devWidth > 600 ? 700 : devWidth
    const [report, setReport] = useState([]);
    const [post, setPost] = useState('');


    function renderListResult() {
        return (
            <View style={tw`w-full h-full`}>

                {report.map((result) => (


                    <View key={result.id} style={tw`w-11/12 flex items-center justify-center flex-wrap my-2 my-0 w-11/12`}>
                        <View style={tw`p-2 w-full rounded-l-lg rounded-r-none shadow-2xl bg-white opacity-75 mx-0 flex flex-col mt-5 `}>
                            <View style={tw`flex flex-row w-full`}>
                                <View style={tw`flex flex-col mx-2 items-start justify-start`}>
                                    <Image style={styles.img2} source={{ uri: "https://image.flaticon.com/icons/png/512/3135/3135715.png" }} />
                                </View>
                                <View style={tw`flex flex-col items-start justify-start w-full`}>           
                                    <View style={tw`w-11/12`} >
                                        <ScrollView style={tw`w-11/12 mb-1`}>
                                            <Text style={tw`w-4/5 text-blue-800 text-sm flex items-center justify-center justify-start`}> {result.message_body}</Text>
                                        </ScrollView>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>)
                )}
            </View>



        )
    }



    useEffect(() => {
        get_member_data('show_message/').then(response => {
            
            const data_all = response.data
            const result = []
            for(let i =data_all.length-1;i>=0;i--){
                result.push(data_all[i])
            }
            setReport(result)

        })
    }, [])

    useEffect(() => {
        console.log({ report })
    }, [report])

    const addPost = () => {

        const all_data = {
            message_body: post,
            creator_id: 27,
            recipient_id: 27
        }
        setPost('')
        sign('show_message/',all_data).then((res)=>{
            get_member_data('show_message/').then(response => {
                const data_all = response.data
                const result = []
                for(let i =data_all.length-1;i>=0;i--){
                    result.push(data_all[i])
                }
                setReport(result)
            })
            
        })
    }

    const goProfile = () => {
        get_member_data('login/show_members/').then(response => {
            const data = response.data
            let profileData = {}
            for (let i = 0; i < data.length; i++) {
                if (data[i].username == route.params.username) {
                    profileData = data[i]
                    break;
                }
            }
            const navigate = () => { navigation.navigate('Profile', { data: profileData }) }
            navigate()
        })
    }

    return (
        <View style={styles.container}>
            <View style={{ width: viewWidth, height: devHight }}>
                <View style={tw`mt-4 flex flex-col bg-blue-300 items-center pb-2 rounded-lg`}>
                    <View style={tw`w-full flex flex flex-row bg-blue-100 p-2 justify-around items-center border-b mb-3`}>
                        <Button containerStyle={tw`m-0 bg-gray-100 `} type={'outline'} title={'Home'} />
                        <Button containerStyle={tw`m-0 `} onPress={goProfile} title={'Profile'} />
                        <Button containerStyle={tw`m-0 `} onPress={() => { navigation.navigate('Search') }} title={'Search'} />
                        <Button containerStyle={tw`m-0 `} onPress={() => { navigation.navigate('Login') }} title={'Sign Out'} />
                    </View>
                    <View style={tw`w-11/12 rounded-lg flex flex-row justify-between items-center`}>
                        <Image style={styles.img} source={{ uri: "https://image.flaticon.com/icons/png/512/3135/3135715.png" }} />
                        <View style={tw`w-full flex flex-col items-center justify-around pb-1`}>
                            <Input containerStyle={tw`w-4/5 bg-gray-100 border rounded-md`}
                                placeholder="Post"
                                autoFocus
                                type="text"
                                value={post}
                                multiline={true} 
                                onChangeText={(text)=>{setPost(text)}}
                            />
                            <Button containerStyle={tw`w-4/5 rounded-md`} onPress={addPost} title="post" />
                        </View>
                    </View>
                </View>
                <View style={tw`w-full h-full flex flex-col items-center mt-5`}>
                    <View style={tw`h-2/3 w-11/12 bg-blue-300 rounded-lg flex flex-col justify-center items-center  mt-5`}>
                        <View style={tw`h-full w-11/12`}>
                            <View style={tw`h-full flex flex-col justify-center items-center`}>
                                <ScrollView style={tw`h-full w-full `} >
                                    <View style={tw`w-full flex flex-col justify-center items-center`}>

                                        {renderListResult()}
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
    container: tw`flex items-center`,
    img: {
        width: 60,
        height: 60,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    img2: {
        width: 30,
        height: 30,
    }
})

export default HomeScreen


