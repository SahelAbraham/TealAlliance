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
        <Text style = {styles.userName}> Hello Scouter </Text>
        <Text style = {styles.welcomeMessage}> Welcome to TealAlliance </Text>
      </View>

      <View style = {styles.searchContainer}>
        <View style = {styles.searchWrapper}>
          <TextInput
            styles = {styles.searchInput}
            value = ""
            onChange = {() => {}}
            placeholder = ""
          />
        </View>

        <TouchableOpacity style = {styles.searchBtn} onPress={() => {}}>
          <Image
            source = {icons.search}
            resizeMode = "contain"
            style = {styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style = {styles.tabsContainer}>
        <FlatList 
          data = {jobTypes}
          renderItem = {({ item}) => (
            <TouchableOpacity
            style = {styles.tab(activeJobType, item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

    </View>
  )
}

export default Welcome