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

const jobTypes = ["Stand Scouter", "Stand Scouter Admin", "Pit Scouter"]
const jobDescriptions = ["Record match data from the stands for the team you are assigned to, then present resultant QR code to Stand Scout Admin",
                         "Upload data recored from stand scouters to the pit computer via USB cable",
                         "Record the pit scouting data for the teams you are assigned to, then upload the data via USB cable to the pit computer"]

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time')


  return (
    <View>
      <View style = {styles.container}>
        <Text style = {styles.BigTeal}> Welcome to TealAlliance </Text>
        <Text style = {styles.whiteText}> Select Your Current Role </Text>
      </View>

      <View style = {styles.tabsContainer}>
        <FlatList 
          data = {jobTypes}
          renderItem = {({ item }) => (
            <TouchableOpacity
            style = {styles.tab(activeJobType, item)}
            onPress = {() => {
              setActiveJobType(item);
              router.push('/search/${item}')
            }}
            >
              <Text style = {styles.tabText(activeJobType, item)}>{item}</Text>
              <Text style = {styles.descriptionText}>{jobDescriptions[1]}</Text>
            </TouchableOpacity>
          )}
          keyExtractor = {item => item}
          contentContainerStyle = {{columnGap: SIZES.small}}
          extraData={jobDescriptions}
        />
      </View>

    </View>
  )
}

export default Welcome