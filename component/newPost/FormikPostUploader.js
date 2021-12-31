import React, {useEffect,useState} from 'react';
import {View, Text, Image, Button , TextInput} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Divider} from 'react-native-elements';
import validUrl from 'valid-url';


const [username, setUsername] = useState('jujuju123');
const [imgurl, setImgUrl] = useState("");
const [post, setPost] = useState("");


const updatePost = async () => {
  try{
    const response = await fetch('http://10.0.2.2:3000/ig/username/'+username, {
      method: 'PUT',
      headers: {
        Accept : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        username: username,
        post : post ,
        imgurl : imgurl
      })
    });
  } catch (error){
    console.error(error);
  } finally {
    navigation.navigate('HomeScreen')
  }
}


const uploadPostSchema = Yup.object().shape({
  imageurl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit.'),
});

const PLACEHOLDER_IMG =
  'https://img.icons8.com/ios-glyphs/90/000000/full-image.png';

const FormikPostUploader = ({navigation}) => {
  const [ThumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  return (
    <Formik
      initialValues={{caption: '', imageUrl: ''}}
      onSubmit={values => {
        console.log(values);
        console.log('Your post was submitted successfully');
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}>
      {({handleBlur, values, errors}) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Image
              source={{
                uri: validUrl.isUri(ThumbnailUrl)
                  ? ThumbnailUrl
                  : PLACEHOLDER_IMG,
              }}
              style={{width: 80, height: 80}}
            />
            <View style={{flex: 1, marginLeft: 12}}>
              <TextInput
                style={{color: 'black', fontSize: 16}}
                placeholder="Write a caption ..."
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={setPost}
                onBlur={handleBlur('caption')}
                value={post}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            style={{color: 'black', fontSize: 14}}
            placeholder="Enter Image Url"
            placeholderTextColor="gray"
            onChangeText={setImgUrl}
            onBlur={handleBlur('imageUrl')}
            value={imgurl}
          />
          {errors.imageUrl && (
            <Text style={{fontSize: 10, color: 'red'}}>{errors.imageUrl}</Text>
          )}
          <Button onPress={()=> updatePost()} title="Share"/>
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
