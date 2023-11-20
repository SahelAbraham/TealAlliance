import * as React from 'react';
import { Stack, useRouter, Link } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../../constants';
import { ScreenHeaderBtn } from '../../components'
import styles from '../../components/home/welcome/welcome.style'
import * as Formik from 'formik';
import * as Yup from 'yup';

import { NativeBaseProvider, Box, extendTheme, Input, FormControl, Button, Select, Text, Heading, HStack, Switch, Radio, Divider, VStack } from 'native-base';

import { 
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard
 } from 'react-native'


export default function StandScouter(){
    const theme = extendTheme({
    colors: {
      Testy: {
        100: '#0097a7ff'
      },
    },
  });

  const router = useRouter();
  const formik = Formik.useFormik({
    initialValues: { team_number: "", drive_base_width:"", drive_base_length:""},
    validationSchema: Yup.object().shape({
        team_number: Yup.string()
        .max(4, "Too Long!")
        .matches(/[1-9]/, "Team Number can only contain numbers.")
        .required("Required"),
        drive_base_width: Yup.string()
        .max(3, "Too Long!")
        .matches(/[1-9]/, "Team Number can only contain numbers.")
        .required("Required"),
        drive_base_length: Yup.string()
        .max(3, "Too Long!")
        .matches(/[1-9]/, "Team Number can only contain numbers.")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm({values: ""});
    },
  });

   return(
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
       <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black2 }}>
           <Stack.Screen
               options = {{
                   headerStyle: {backgroundColor: COLORS.teal},
                   headerShadowVisible: false,
                   headerLeft: () => (
                       <ScreenHeaderBtn iconUrl={icons.menu} dimension = "125%" />
                   ),
                   headerRight: () => (
                       <ScreenHeaderBtn iconUrl={images.tvhead} dimension = "225%" />
                   ),
                   headerTitle: "Pit Scouting",
                   headerTitleAlign: 'center'
               }}
           />
        <View
          style = {{
          flex: 1,
          padding: SIZES.medium
          }}>
            
            <NativeBaseProvider theme = {theme}>
            <Heading color = "white" size = "xl" > Hello Pit Scouter </Heading>
            <Heading color = "Testy.100" size = "lg" paddingTop={4}> Team Number </Heading>
            <Box alignItems={'center'} padding={4} _text={{ fontsize: 'md', color: 'white'}}>
            <Text fontSize = 'md'color = 'white' alignSelf={'flex-start'}> Enter Team Being Scouted </Text>
                <Input 
                    type = "team_number"
                    style = {{color: 'white'}}
                    size = '2xl' 
                    placeholder='Eg. 303'
                    onChangeText={formik.handleChange("team_number")}
                    onBlur={formik.handleBlur("team_number")} 
                    keyboardType='numeric'/>
                {formik.errors.team_number && formik.touched.team_number ? (
                    <Text fontSize = 'sm' color = 'danger.500' alignSelf={'flex-start'}>
                        {formik.errors.team_number}
                    </Text>
                ): null}
            </Box>
            <Heading color = "Testy.100" size = "lg" paddingTop={3}> Drive Base </Heading>
            <Box alignItems={'left'} padding={4} _text={{ fontsize: 'md', color: 'white'}}>
            <VStack>
            <Text fontSize = 'md'color = 'white' alignSelf={'flex-start'}> Width Without Bumpers (in inches) </Text>
                <Input 
                    type = "drive_base_width"
                    style = {{color: 'white'}}
                    size = '2xl' 
                    placeholder='Eg. 303'
                    onChangeText={formik.handleChange("drive_base_width")}
                    onBlur={formik.handleBlur("drive_base_width")} 
                    keyboardType='numeric'/>
                {formik.errors.drive_base_width && formik.touched.drive_base_width ? (
                    <Text fontSize = 'sm' color = 'danger.500' alignSelf={'flex-start'}>
                        {formik.errors.drive_base_width}
                    </Text>
                ): null}
            </VStack>
            <VStack>
            <Text marginTop = {3} fontSize = 'md'color = 'white' alignSelf={'flex-start'}> Length Without Bumpers (in inches) </Text>
                <Input 
                    type = "drive_base_length"
                    style = {{color: 'white'}}
                    size = '2xl' 
                    placeholder='Eg. 303'
                    onChangeText={formik.handleChange("drive_base_length")}
                    onBlur={formik.handleBlur("drive_base_length")} 
                    keyboardType='numeric'/>
                {formik.errors.drive_base_length && formik.touched.drive_base_length ? (
                    <Text fontSize = 'sm' color = 'danger.500' alignSelf={'flex-start'}>
                        {formik.errors.drive_base_length}
                    </Text>
                ): null}
            </VStack>
            </Box>
            <View style = {{flex: 1, position: 'absolute', bottom: 30, alignSelf: 'center'}}>
                <Box alignItems={'center'} safeAreaBottom>
                    <Button 
                    size = 'lg' 
                    backgroundColor = "Testy.100" 
                    _text={{color:'black', fontWeight:'700'}} 
                    height = {75}
                    onPress = {formik.handleSubmit} type = "submit">       Submit Pit Scout Report!      </Button>
                </Box>
            </View>
            </NativeBaseProvider>
          </View>
       </SafeAreaView>
    </TouchableWithoutFeedback>
   )
}