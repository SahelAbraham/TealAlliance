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
    initialValues: {match_number: "", team_number: ""},
    validationSchema: Yup.object().shape({
        match_number: Yup.string()
        .max(3, "Too Long!")
        .matches(/[1-9]/, "Match Number can only contain numbers.")
        .required("Required"),
        team_number: Yup.string()
        .max(4, "Too Long!")
        .matches(/[1-9]/, "Team Number can only contain numbers.")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm({values: ""});
    },
  });
  const [allianceCol, setAllianceCol] = React.useState("blue");
  const [allianceNum, setAllianceNum] = React.useState("1");

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
                   headerTitle: "Stand Scouting",
                   headerTitleAlign: 'center'
               }}
           />
        <View
          style = {{
          flex: 1,
          padding: SIZES.medium
          }}>
            <NativeBaseProvider theme = {theme}>
            <Heading color = "white" size = "xl"> Hello Stand Scouter </Heading>
            <Heading color = "Testy.100" size = "lg" paddingTop={4}> Team and Match Number </Heading>
            <Box alignItems={'center'} padding={4} _text={{ fontsize: 'md', color: 'white'}}>
            <Text fontSize = 'md'color = 'white' alignSelf={'flex-start'}> Enter Match Number </Text>
            <Input 
                    type = "match_number"
                    style = {{color: 'white'}}
                    size = '2xl' 
                    placeholder='Eg. 120'
                    onChangeText={formik.handleChange("match_number")}
                    onBlur={formik.handleBlur("match_number")} 
                    keyboardType='numeric'/>
                {formik.errors.match_number && formik.touched.match_number ? (
                    <Text fontSize = 'sm' color = 'danger.500' alignSelf={'flex-start'}>
                        {formik.errors.match_number}
                    </Text>
                ): null}
            </Box>
            <Box alignItems={'center'} padding={4} _text={{ fontsize: 'md', color: 'white'}}>
            <Text fontSize = 'md'color = 'white' alignSelf={'flex-start'}> Enter Team Number </Text>
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
            <HStack justifyContent={'center'} space = {2} paddingTop={3}>
                <VStack>
                <Heading color = "Testy.100" size = "lg"> Alliance Color </Heading>
                <Radio.Group name = "Team Color" value = {allianceCol} onChange = {nextvalue => {setAllianceCol(nextvalue)}}>
                    <Radio colorScheme = 'blue' value = "blue" my = {6} marginLeft={4} _text={{color: 'blue.500', fontWeight:'600', fontSize: 'xl'}}>
                        Blue
                    </Radio>
                    <Radio colorScheme = 'red' value = "red" my = {5} marginLeft={4} _text={{color: 'red.500', fontWeight:'600', fontSize: 'xl'}}>
                        Red
                    </Radio>
                </Radio.Group>
                </VStack>
                <Divider orientation = 'vertical' thickness={2}/>
                <VStack alignItems={'center'}>
                <Heading color = "Testy.100" size = "lg"> Alliance Number </Heading>
                <Radio.Group name = "Team Color" value = {allianceNum} onChange = {nextvalue => {setAllianceNum(nextvalue)}}>
                    <Radio value = "1" my = {6} _text={{color: 'white', fontWeight:'600', fontSize: 'xl'}}>
                        1
                    </Radio>
                    <Radio value = "2" marginTop = {3} marginBottom={3} _text={{color: 'white', fontWeight:'600', fontSize: 'xl'}}>
                        2
                    </Radio>
                    <Radio value = "3" my = {6} _text={{color: 'white', fontWeight:'600', fontSize: 'xl'}}>
                        3
                    </Radio>
                </Radio.Group>
                </VStack>
            </HStack>
            <View style = {{flex: 1, position: 'absolute', bottom: 30, alignSelf: 'center'}}>
                <Box alignItems={'center'} safeAreaBottom>
                    <Button 
                    size = 'lg' 
                    backgroundColor = "Testy.100" 
                    _text={{color:'black', fontWeight:'600'}} 
                    onPress = {formik.handleSubmit} type = "submit"> 
                    Start Scouting!
                    </Button>
                </Box>
            </View>
            </NativeBaseProvider>
          </View>
       </SafeAreaView>
    </TouchableWithoutFeedback>
   )
}