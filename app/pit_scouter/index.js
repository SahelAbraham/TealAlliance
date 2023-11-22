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

  const [drivebaseType, setDrivebaseType] = React.useState("tank");
  const [drivebaseMotors, setDrivebaseMotors] = React.useState("neo");
  const router = useRouter();
  const formik = Formik.useFormik({
    initialValues: { team_number: "", drive_base_width:"", drive_base_length:"", cpg:""},
    validationSchema: Yup.object().shape({
        cpg: Yup.string()
        .max(4, "Too Long!")
        .matches(/[1-9]/, "Cycles Per Game can only contain numbers")
        .required("Required"),
        team_number: Yup.string()
        .max(4, "Too Long!")
        .matches(/[1-9]/, "Team Number can only contain numbers")
        .required("Required"),
        drive_base_width: Yup.string()
        .max(2, "Too Long!")
        .matches(/[1-9]/, "Dimensions should only include numbers")
        .required("Required"),
        drive_base_length: Yup.string()
        .max(2, "Too Long!")
        .matches(/[1-9]/, "Dimensions should only include numbers")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
        console.log(values, drivebaseMotors, drivebaseType);
        resetForm({values: ""});
    },
  });

   return(
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
       <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black2 }}>
       <ScrollView>
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
            <Heading color = "white" size = "xl" > Pit Scouting Form </Heading>
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
            <Divider my={2} thickness={3}></Divider>
            <Heading color = "Testy.100" size = "lg" paddingTop={1}> Drive Base </Heading>
            <Box alignItems={'left'} padding={4} _text={{ fontsize: 'md', color: 'white'}}>
            <Heading color = "white" size = "md" marginTop={2} marginBottom={4}> Dimensions </Heading>
            <Text fontSize = 'md'color = 'white' alignSelf={'flex-start'}> Width Without Bumpers (in inches) </Text>
                <Input 
                    type = "drive_base_width"
                    style = {{color: 'white'}}
                    size = '2xl' 
                    placeholder='Eg. 31'
                    onChangeText={formik.handleChange("drive_base_width")}
                    onBlur={formik.handleBlur("drive_base_width")} 
                    keyboardType='numeric'/>

                {formik.errors.drive_base_width && formik.touched.drive_base_width ? (
                    <Text fontSize = 'sm' color = 'danger.500' alignSelf={'flex-start'}>
                        {formik.errors.drive_base_width}
                    </Text>
                ): null}
            <Text marginTop = {6} fontSize = 'md'color = 'white' alignSelf={'flex-start'}> Length Without Bumpers (in inches) </Text>
                <Input 
                    type = "drive_base_length"
                    style = {{color: 'white'}}
                    size = '2xl' 
                    placeholder='Eg. 31'
                    onChangeText={formik.handleChange("drive_base_length")}
                    onBlur={formik.handleBlur("drive_base_length")} 
                    keyboardType='numeric'/>
                {formik.errors.drive_base_length && formik.touched.drive_base_length ? (
                    <Text fontSize = 'sm' color = 'danger.500' alignSelf={'flex-start'}>
                        {formik.errors.drive_base_length}
                    </Text>
                ): null}
                <Heading color = "white" size = "md" marginTop={8}> Drive Base Type </Heading>
                <Radio.Group name = "Team Color" value = {drivebaseType} onChange = {nextvalue => {setDrivebaseType(nextvalue)}}>
                    <HStack>
                    <VStack>
                    <Radio value = "tank" my = {5} marginLeft={3} _text={{ color: 'Testy.100', fontWeight:'600', fontSize: 'lg'}}>
                        Tank Drive
                    </Radio>
                    <Radio value = "swerve" my = {2} marginLeft={3} _text={{color: 'Testy.100', fontWeight:'600', fontSize: 'lg'}}>
                        Swerve Drive
                    </Radio>
                    </VStack>
                    <VStack>
                    <Radio value = "mecanum" my = {5} marginLeft={8} _text={{ color: 'Testy.100', fontWeight:'600', fontSize: 'lg'}}>
                        Mecanum
                    </Radio>
                    <Radio value = "holonomic" my = {2} marginLeft={8} _text={{color: 'Testy.100', fontWeight:'600', fontSize: 'lg'}}>
                        Holonomic
                    </Radio>
                    </VStack>
                    </HStack>
                </Radio.Group>
                <Heading color = "white" size = "md" marginTop={7}> Drive Motors </Heading>
                <Radio.Group name = "Team Color" value = {drivebaseMotors} onChange = {nextvalue => {setDrivebaseMotors(nextvalue)}}>
                    <HStack>
                    <VStack>
                    <Radio value = "neo" my = {5} marginLeft={3} _text={{ color: 'Testy.100', fontWeight:'600', fontSize: 'lg'}}>
                        Neos
                    </Radio>
                    <Radio value = "falcon" my = {2} marginLeft={3} _text={{color: 'Testy.100', fontWeight:'600', fontSize: 'lg'}}>
                        Falcons
                    </Radio>
                    </VStack>
                    <VStack>
                    <Radio value = "kraken" my = {5} marginLeft={20} _text={{ color: 'Testy.100', fontWeight:'600', fontSize: 'lg'}}>
                        Krakens
                    </Radio>
                    <Radio value = "cim" my = {2} marginLeft={20} _text={{color: 'Testy.100', fontWeight:'600', fontSize: 'lg'}}>
                        CIMs
                    </Radio>
                    </VStack>
                    </HStack>
                </Radio.Group>
            </Box>
            <Divider my={2} thickness={3}></Divider>
            <Heading color = "Testy.100" size = "lg" paddingTop={1}> Scoring Capabilities </Heading>
            <Box alignItems={'left'} padding={4} _text={{ fontsize: 'md', color: 'white'}}>
            <Heading color = "white" size = "md" marginTop={2} marginBottom={4}> Points </Heading>
            <Text fontSize = 'md'color = 'white' alignSelf={'flex-start'}> Cycles Per Game </Text>
                <Input 
                    type = "drive_base_width"
                    style = {{color: 'white'}}
                    size = '2xl' 
                    placeholder='Eg. 4'
                    onChangeText={formik.handleChange("drive_base_width")}
                    onBlur={formik.handleBlur("drive_base_width")} 
                    keyboardType='numeric'/>

                {formik.errors.drive_base_width && formik.touched.drive_base_width ? (
                    <Text fontSize = 'sm' color = 'danger.500' alignSelf={'flex-start'}>
                        {formik.errors.drive_base_width}
                    </Text>
                ): null}
            </Box>
            <View style = {{flex: 1, alignSelf: 'center'}}>
                <Box alignItems={'center'} my = {10}>
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
          </ScrollView>
       </SafeAreaView>
    </TouchableWithoutFeedback>
   )
}