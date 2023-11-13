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


const jobs = [{jobName: "Stand Scouter", jobDescription: "Record match data from the stands for the team you are assigned to, then present the resultant QR code to Stand Scout Admin"},
              {jobName: "Stand Scouter Admin", jobDescription: "Upload data recored from stand scouters to the pit computer via USB cable"},
              {jobName: "Pit Scouter", jobDescription: "Record pit scouting data from the teams you are assigned to, then upload the data via USB cable to the pit computer"}]

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
              setActiveJobType(jobTypes);
              router.push('/search/${item}')
            }}
            >
            <ListItem
            title={`${item.name.first} ${item.name.last}`}
            subtitle={item.email}
         />
              <Text style = {styles.tabText(activeJobType, item)}>{item}</Text>
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