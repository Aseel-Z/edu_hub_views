import React , {useState} from 'react'
import { StyleSheet,View } from 'react-native'
import { Input, Button, Text, SearchBar } from 'react-native-elements';
import { Dimensions } from 'react-native';


const HomeScreen = ({navigation,route}) => {
    
    const devHight = Dimensions.get('window').height;
    const devWidth = Dimensions.get('window').width;
    const [search,setSearch] = useState('')

    return (
        <View style={styles.container}>
            <View style={{ width:devWidth > 600? 600 : devWidth}}>
                <SearchBar 
                    containerStyle={{ marginTop:10}}
                    inputContainerStyle= {{ }}
                    placeholder="Type Here..."
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        // justifyContent:'center',
    }
})

export default HomeScreen


// {console.log(route.params.username),console.log(route.params.pass)}