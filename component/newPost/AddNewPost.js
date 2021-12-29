import React from 'react'
import { View, Text , StyleSheet , Image, TouchableOpacity} from 'react-native'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => (
    <View style={styles.container}>
        <Header/>
        <FormikPostUploader/>
    </View>
)


export default AddNewPost

const image = 'https://img.icons8.com/material/90/000000/back--v1.png'

const Header   = () => (
    <View style={styles.headerContainer}>
    <TouchableOpacity>
    <Image source={{uri : image}} styles={{width : 30, height : 30 }}/>
    </TouchableOpacity>
    <Text style={styles.headerText}>NEW POST</Text>
    <Text></Text>
</View>
)

const styles = StyleSheet.create({
    container : {
        marginHorizontal : 10

    },

    headerContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    
    headerText : {
        color : '#000',
        fontWeight : '700',
        fontSize : 25,
        marginTop : 10,
        marginRight : 20 ,
    }
})
