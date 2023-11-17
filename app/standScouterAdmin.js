import { useState } from 'react';
import { Stack, useRouter, Link } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn } from '../components'
import { Footer } from '../components/common/footer/Footer'

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

import styles from '../components/home/welcome/welcome.style'

const jobs = ["Stand Scouter ADMIN", "Pit Scouter ADMIN", "Drive Team ADMIN", "Stand Scouter Admin ADMIN"]

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
                   headerTitle: "Stand Scouter ADMIN"
               }}
               
           />

           <ScrollView showVerticalScrollIndicator = {false}>
               <View
                   style = {{
                       backgroundColor: COLORS.white,
                       flex: 1,
                       padding: SIZES.medium
                   }}
                   >
                    <Text> hi </Text>   
                   </View>
           </ScrollView>

       </SafeAreaView>
   )
}

