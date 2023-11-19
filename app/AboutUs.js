import { useState } from 'react';
import { Stack, useRouter, Link } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn } from '../components'
import styles from '../components/home/welcome/welcome.style'

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
                   headerTitle: "About Us",
                   headerTitleAlign: 'center'
               }}
               
           />
        <View
          style = {{
          flex: 1,
          padding: SIZES.medium
          }}>
            <Text style = {styles.BigTeal}> We Are 303 </Text>
            <Text style = {styles.centeredWhiteText}> Team 303, founded in 1999...</Text>
          </View>
       </SafeAreaView>
   )
}

