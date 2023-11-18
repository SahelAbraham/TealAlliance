import { useState } from 'react';
import { Stack, useRouter, Link } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../../constants';
import { ScreenHeaderBtn } from '../../components/common/header'
import styles from '../../components/home/welcome/welcome.style'


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
                       <ScreenHeaderBtn iconUrl={icons.menu} dimension = "80%" />
                   ),
                   headerRight: () => (
                       <ScreenHeaderBtn iconUrl={images.tvhead} dimension = "80%" />
                   ),
                   headerTitle: "Stand Scouter ADMIN",
                   headerTitleAlign: 'center'
               }}
               
           />
        <View
          style = {{
          flex: 1,
          padding: SIZES.medium
          }}>
            <Text style = {styles.centeredBigTeal}> Hello Admin </Text>
            <Text style = {styles.centeredWhiteText}> Scanned Scouting Data Will Appear Here</Text>
          </View>
       </SafeAreaView>
   )
}

