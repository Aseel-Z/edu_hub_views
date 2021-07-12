import React , {useState} from 'react'
import { StyleSheet,View} from 'react-native'
import { Input, Text, Button,Image  } from 'react-native-elements';
import { Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = ({navigation,route}) => {
    
    const devHight = Dimensions.get('window').height;
    const devWidth = Dimensions.get('window').width;
    const viewWidth = devWidth > 600? 700 : devWidth

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
                    <View style={tw`h-1/4 w-11/12 border rounded-md flex flex-col justify-center`}>
                        <Image style={{width:100 , height:100}} source={{uri:"https://image.flaticon.com/icons/png/512/3135/3135715.png"}}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:tw`flex items-center`
})

export default HomeScreen


// {console.log(route.params.username),console.log(route.params.pass)}

