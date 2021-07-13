import React from 'react'
import { View, Text } from 'react-native'
import { Button  } from 'react-native-elements';

const SearchScreen = () => {
    return (
        <View>
            <Button onPress={()=>{navigation.navigate('Result',{data:'result'})}}  title="Send Message" />
        </View>
    )
}

export default SearchScreen
