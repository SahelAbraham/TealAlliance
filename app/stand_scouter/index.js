import * as React from 'react';
import { Stack, useRouter, Link } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../../constants';
import { ScreenHeaderBtn } from '../../components'
import styles from '../../components/home/welcome/welcome.style'

import { NativeBaseProvider, Box, extendTheme, Input, FormControl, Button, Select } from 'native-base';

import { 
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard
 } from 'react-native'


export default function StandScouter(){
  const router = useRouter();
  const submit = () => {
    validate() ? console.log('Submitted', valid) : console.log(error1, valid);
  }
  const [form1Data, setForm1Data] = React.useState({});
  const [form2Data, setForm2Data] = React.useState({});
  const [error1, setError1] = React.useState({});
  const [error2, setError2] = React.useState({});
  valid = true;
  valid2 = true;
  const validate = () => {
    if (form1Data.val === undefined) {
      setError1({ ...error1,
            val: 'Number not inputted'
      });
      valid = false;
      return false;
    } 
    else if (form1Data.val.length > 3) {
      setError1({ ...error1,
        val: 'Number Too Long'
      });
      valid = false;
      return false;
    }
    else{
        valid = true;
    }
    if (form2Data.val === undefined){
        setError2({...error2, 
            val: 'Number not inputted'
        });
        valid2 = false;
        return false;
    }
    else{
        valid2 = true;
    }
    return true;

  };

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
            <Text style = {styles.BigTeal}> Hello Stand Scouter </Text>
            <NativeBaseProvider>
            <Box alignItems={'center'} padding={4} _text={{ fontsize: 'md', color: 'white'}}>
                <FormControl isInvalid = {!valid}>
                    <FormControl.Label _text = {{color: 'white'}}> Enter Match Number </FormControl.Label>
                <Input 
                    style = {{color: 'white'}}
                    size = '2xl' 
                    placeholder='Eg. 120' 
                    keyboardType='numeric' 
                    onChangeText={value => setForm1Data({...form1Data, val: value})}/>
                <FormControl.ErrorMessage> Please Enter a Valid Match Number </FormControl.ErrorMessage>
                </FormControl>
            </Box>
            <Box alignItems={'center'} padding={4} _text={{ fontsize: 'md', color: 'white'}}>
                <FormControl isInvalid = {!valid2}>
                    <FormControl.Label _text = {{color: 'white'}}> Enter Team Being Scouted </FormControl.Label>
                <Input 
                    style = {{color: 'white'}}
                    size = '2xl' 
                    placeholder='Eg. 303' 
                    keyboardType='numeric'
                    onChangeText = {value => setForm2data({...form2Data, val: value})}/>
                <FormControl.ErrorMessage> Please Enter a Valid Team Number </FormControl.ErrorMessage>
                </FormControl>
            </Box>
            <View style = {{flex: 1, position: 'absolute', bottom: 20, alignSelf: 'center'}}>
                <Box alignItems={'center'} safeAreaBottom>
                    <Button size = 'lg' onPress={submit} colorScheme = 'teal'>Start Scouting!</Button>
                </Box>
            </View>
            </NativeBaseProvider>
          </View>
       </SafeAreaView>
    </TouchableWithoutFeedback>
   )
}