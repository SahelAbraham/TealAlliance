import { useState } from 'react';
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
  FlatList
 } from 'react-native'

const submit = () => {

}

export default function StandScouter(){
  const router = useRouter();
   return(
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
            <Box alignItems={'center'} padding={4}>
                <FormControl>
                    <FormControl.Label> Enter Match Number </FormControl.Label>
                <Input size = 'xl' placeholder='Match #'/>
                </FormControl>
            </Box>
            <View style = {{flex: 1, position: 'absolute', alignSelf: 'center', bottom: 20}}>
                <Center>
                <Box alignItems={'center'}>
                    <Button size = 'lg' onPress={submit} colorScheme = 'teal'> Start Scouting </Button>
                </Box>
                </Center>
            </View>
            </NativeBaseProvider>
          </View>
       </SafeAreaView>
   )
}