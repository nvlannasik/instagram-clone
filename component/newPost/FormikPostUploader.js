import React, {useState, useEffect} from 'react';
import {View, Text, Image, Button} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {TextInput} from 'react-native-gesture-handler';
import {Divider} from 'react-native-elements';
import validUrl from 'valid-url';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const uploadPostSchema = Yup.object().shape({
  imageurl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit.'),
});

const PLACEHOLDER_IMG =
  'https://img.icons8.com/ios-glyphs/90/000000/full-image.png';

const FormikPostUploader = ({navigation}) => {
  const [ThumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  const [currentLoggedInUser, setCurretLoggedInUser] = useState(null);

  const getUsername = () => {
    const user = auth().currentUser;
    const unsubsribe = firestore()
      .collection('users')
      .where('owner_uid', '==', user.uid)
      .limit(1)
      .onSnapshot(snapshot =>
        snapshot.docs.map(doc => {
          setCurretLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture,
          });
        }),
      );
    return unsubsribe;
  };

  useEffect(() => {
    getUsername();
  }, []);

  const uploadPostToFirebase = (imageUrl, caption) => {
    const unsubsribe = firestore()
      .collection('users')
      .doc(auth().currentUser.email)
      .collection('posts')
      .add({
        imageUrl: imageUrl,
        user: currentLoggedInUser.username,
        profile_picture: currentLoggedInUser.profilePicture,
        owner_uid: auth().currentUser.uid,
        caption: caption,
        createdAt: firestore().FieldValue.serverTimestamp(),
        likes: 0,
        likes__by_users: [],
        comments: [],
      })
      .then(() => navigation.goBack());
    return unsubsribe;
  };

  return (
    <Formik
      initialValues={{caption: '', imageUrl: ''}}
      onSubmit={values => {
        uploadPostToFirebase(values.imageUrl, values.caption);
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}>
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
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
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            style={{color: 'black', fontSize: 14}}
            placeholder="Enter Image Url"
            placeholderTextColor="gray"
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{fontSize: 10, color: 'red'}}>{errors.imageUrl}</Text>
          )}
          <Button onPress={handleSubmit} title="Share" />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
