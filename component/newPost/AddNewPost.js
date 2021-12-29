import React from 'react'
import { View, Text , StyleSheet , Image, TouchableOpacity} from 'react-native'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({navigation}) => (
    <View style={styles.container}>
        <Header navigation={navigation}/>
        <FormikPostUploader navigation={navigation}/>
    </View>
)


export default AddNewPost

const image = 'https://img.icons8.com/material/90/000000/back--v1.png'

const Header  = ({navigation}) => (
    <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={{uri : image}} style={{width : 30, height : 30, marginTop : 12}}/>
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
        fontSize : 20,
        marginTop : 10,
        marginRight : 20 ,
    }
})
