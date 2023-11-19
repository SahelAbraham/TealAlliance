import * as React from 'react';
import { Stack, useRouter, Link } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../../constants';
import { ScreenHeaderBtn } from '../../components'
import styles from '../../components/home/welcome/welcome.style'

import { NativeBaseProvider, Box, extendTheme, Input, FormControl, Button, Center } from 'native-base';

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
    validate() ? console.log('Submitted') : console.log('Invalid');
  }
  const [form1Data, setForm1Data] = React.useState({});
  const [error1, setError1] = React.useState({});

  const validate = () => {
    if (form1Data.val === undefined) {
      setError1({ ...error1,
        val: 'Number not inputted'
      });
      return false;
    } else if (form1Data.val.length > 3) {
      setError1({ ...error1,
        val: 'Number Too Long'
      });
      return false;
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
                <FormControl isInvalid>
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
                <FormControl>
                    <FormControl.Label _text = {{color: 'white'}}> Enter Team Number </FormControl.Label>
                <Input 
                    style = {{color: 'white'}}
                    size = '2xl' 
                    placeholder='Eg. 303' 
                    keyboardType='numeric'/>
                <FormControl.ErrorMessage> Please Enter a Valid Match Number </FormControl.ErrorMessage>
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