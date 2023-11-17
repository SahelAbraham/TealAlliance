import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Flatlist } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { icons, images, SIZES } from '../components/index.js';
import styles from '../components/home/welcome/welcome.style.js';

export default function admin(){

    const router = useRouter();

    return (
        <View>
          <View style = {styles.container}>
            <Text style = {styles.BigTeal}> STAND SCOUTER ADMIN </Text>
            <Text style = {styles.whiteText}> Select Your Current Role </Text>
          </View>
    
          <View style = {styles.tabsContainer}>
            <FlatList 
              data = {jobs}
              renderItem = {({ item }) => (
                <TouchableOpacity
                style = {[styles.tab(item), {marginBottom: SIZES.xLarge }]}
                onPress = {() => {
                  router.push('/search/${item}')
                }}
                >
                  <Text style = {styles.tabText(item)}>{item.jobName}</Text>
                </TouchableOpacity>
              )}
              keyExtractor = {item => item}
              contentContainerStyle = {{columnGap: SIZES.small}}
            />
          </View>
    
        </View>
      )
}