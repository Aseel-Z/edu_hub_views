import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Input, Text, Button, Image } from 'react-native-elements';
import { Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';
// import io from 'socket.io-client';
import axios from 'axios'
import { getMsg } from '../services/api';


const MessagesScreen = ({ navigation, route }) => {
    const [data, setData] = useState([])
    // const [chatMessages,setChatMessages ] = useState([])


    function renderListResult() {
        return (
        <View style={tw`w-full h-full`}>
        data.map((result) =>
        <View key={result.id} style={tw`w-11/12 flex items-center justify-center flex-wrap my-2 my-0 w-11/12`}>
            <View style={tw`p-2 w-full rounded-l-lg rounded-r-none shadow-2xl bg-white opacity-75 mx-0 flex flex-col mt-5 `}>
                <View style={tw`flex flex-row`}>
                    <View style={tw`flex flex-col mx-2 items-start justify-start`}>
                        <Image style={styles.img2} source={{ uri: 'https://image.flaticon.com/icons/png/512/3135/3135715.png' }} />
                    </View>
                    <View style={tw`flex flex-col items-start justify-start`}>
                        {/* <Text style={tw`text-lg font-bold pt-0`}>{result.name}</Text> */}
                        <View style={tw`w-11/12`} >
                            <ScrollView style={tw`w-11/12 mb-1`}>
                                <Text style={tw`w-4/5 text-blue-800 text-sm mx-0 flex items-center justify-center justify-start`}> {result.message_body}</Text>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
        </View>
            </View>



        )
    }

    useEffect(() => {
        getMsg('show_message/').then(
            
            response => {

                const data_all = response.data
                const data = []
                for(let i =data_all.length-1;i>=0;i--){
                    data.push(data_all[i])
                }
                // console.log(response.data)
                setData(response.data)

            }
        )

    }, [])


    // const addPost = () => {

    //     const all_data = {
    //         message_body: post,
    //         creator_id: 27,
    //         recipient_id: 27
    //     }
    //     sign('show_message/',all_data).then((res)=>{
    //         get_member_data('show_message/').then(response => {
    //             const data_all = response.data
    //             const result = []
    //             for(let i =data_all.length-1;i>=0;i--){
    //                 result.push(data_all[i])
    //             }
    //             setReport(result)
    //         })
            
    //     })
    // }



    
    // function setUpSocket(params) {
    //     socket = io('http://172.26.112.1:3000');
    //     // deploy - react
    //     socket.on('chat message' , msg => {
    //     setChatMessages([...chatMessages, msg]) 
    // }

    // function submitChatMessage () {
    //     socket.emit('chat message', chatMessages);
    //     setChatMessages([])}





    useEffect(() => {
        console.log({ data })
    }, [data])




    const devHight = Dimensions.get('window').height;
    const devWidth = Dimensions.get('window').width;
    const viewWidth = devWidth > 600 ? 700 : devWidth
    const [message, setMessage] = useState("")

    const addMessage = () => {
        console.log(message)
    }

    const refresh = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <View style={{ width: viewWidth, height: devHight }}>
                <View style={tw`mt-4 flex flex-col bg-blue-300 items-center pb-2 rounded-lg`}>
                    <View style={tw`w-full flex flex flex-row bg-blue-100 p-2 justify-around items-center border-b`}>
                        <Button containerStyle={tw`m-0 bg-gray-100 `} onPress={refresh} type={'outline'} title={'Home'} />
                        <Button containerStyle={tw`m-0 `} onPress={() => { navigation.navigate('Profile') }} title={'Profile'} />
                        <Button containerStyle={tw`m-0 `} onPress={() => { navigation.navigate('Search') }} title={'Search'} />
                        <Button containerStyle={tw`m-0 `} onPress={() => { navigation.navigate('Login') }} title={'Sign Out'} />
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
                                    <View style={tw`w-11/12 rounded-lg flex flex-row justify-between items-center`}>
                                        <Image style={styles.img} source={{ uri: "https://image.flaticon.com/icons/png/512/3135/3135715.png" }} />
                                        <View style={tw`w-full flex flex-col items-center justify-around pb-1`}>
                                            <Input containerStyle={tw`w-4/5 bg-gray-100 border rounded-md`}
                                                placeholder="type your message..."
                                                autoFocus
                                                type="text"
                                                value={message}
                                                multiline={true}
                                                onChangeText={(text) => { setMessage(text) }}
                                            />
                                            <Button containerStyle={tw`w-4/5 rounded-md`} onPress={addMessage} title='send' />
                                        </View>
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

export default MessagesScreen




// export default class App extends React.Component{

//   constructor(props){
//     this.state = {chatMessage : '', chatMessages : []}

//   }
//   componentDidMount() {
//     this.socket = io('http://172.26.112.1:3000');
//     // const socket = io('http://localhost:3000');
//     this.socket.on('chat message' , msg => {
//       this.setState({chatMessages:[...this.state.chatMessages, msg]})
//     })


//   }
//   submitChatMessage () {
//     this.socket.emit('chat message', this.chatMessage);
//     this.setState({chatMessage : ''})

//   }
// render(){
//   map over chatmessages  and then return 
//   const chatMessages = this.state.chatMessages.map(chatMessage => 
//     add unique key to each message
//   <Text key = {chatMessage}>{chatMessage}</Text>)

// }}
