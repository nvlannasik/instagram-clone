import React, {useState} from 'react';
import {View, Text, Image, Button} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {TextInput} from 'react-native-gesture-handler';
import {Divider} from 'react-native-elements';
import validUrl from 'valid-url';

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
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
