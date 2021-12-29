import React from 'react'
import { SafeAreaView } from 'react-native'
import AddNewPost from '../component/newPost/AddNewPost'

const NewPostScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor : 'white', flex : 1}}>
            <AddNewPost navigation={navigation}/>
        </SafeAreaView>
    )
}

export default NewPostScreen
