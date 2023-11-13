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
          renderItem = {({ item}) => (
            <TouchableOpacity
            style = {styles.tab(activeJobType, item)}
            onPress = {() => {
              setActiveJobType(item);
              router.push('/search/${item}')
            }}
            >
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