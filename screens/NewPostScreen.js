import React from 'react'
import { SafeAreaView } from 'react-native'
import AddNewPost from '../component/newPost/AddNewPost'

const NewPostScreen = () => {
    return (
        <SafeAreaView style={{backgroundColor : 'white', flex : 1}}>
            <AddNewPost/>
        </SafeAreaView>
    )
}

export default NewPostScreen
