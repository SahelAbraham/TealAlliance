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

const jobs = ["Stand Scouter", "Pit Scouter", "Drive Team", "Stand Scouter Admin"]

function Welcome() {
   const router = useRouter();
    return (
      <View>
        <View style = {styles.container}>
          <Text style = {styles.BigTeal}> Welcome to TealAlliance </Text>
          <Text style = {styles.whiteText}> Select Your Current Role </Text>
        </View>
  
        <View style = {styles.tabsContainer}>
          <FlatList 
            data = {jobs}
            renderItem = {({ item }) => (
              <TouchableOpacity
              style = {[styles.tab(item), {marginBottom: SIZES.xLarge }]}
              onPress = {() => {
                router.push('/StandScouterAdmin')
              }}
              >
                <Text style = {styles.tabText(item)}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor = {item => item}
            contentContainerStyle = {{columnGap: SIZES.small}}
          />
        </View>
      </View>
    )
  }

export default function Home(){
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
                    headerTitle: "Home",
                    headerTitleAlign: 'center'
                }}
                
            />

            <ScrollView showVerticalScrollIndicator = {false}>
                <View
                    style = {{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                    >
                        <Welcome/>
                        
                    </View>
            </ScrollView>

        </SafeAreaView>
    )
}