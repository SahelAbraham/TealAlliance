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

import styles from './scouting_basic_info.style'
import { icons, SIZES } from '../../../constants';
// import { scouting_basic_info } from '../..';

const jobs = [{jobName: "Stand Scouter"},
              {jobName: "Pit Scouter"},
              {jobName: "Drive Team"},
              {jobName: "Stand Scouter Admin"}]

const Scouting_basic_info = () => {
  const router = useRouter();


  return (
    <View>
      <View style = {styles.container}>
        <Text style = {styles.BigTeal}> STAND SCOUTING ADMIN </Text>
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

export default Scouting_basic_info