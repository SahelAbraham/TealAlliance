import { useState } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native'

import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const jobs = [{jobName: "Stand Scouter"},
              {jobName: "Pit Scouter"},
              {jobName: "Drive Team"},
              {jobName: "Stand Scouter Admin"}]

const Welcome = () => {
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
            style = {[styles.tab(item), {marginBottom: SIZES.small}]}
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

export default Welcome