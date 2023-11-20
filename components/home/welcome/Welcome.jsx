import { useState, React } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native'

 import { useNavigation } from '@react-navigation/native';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const jobs = [
  { id: 1, name: "Stand Scouter"},
  { id: 2, name: "Pit Scouter"},
  { id: 3, name: "Drive Team"},
  { id: 4, name: "Stand Scouter Admin"},
];

export default function Welcome() {

  const navigation = useNavigation();

  const handleButtonPress = (item) => {
    switch (item.id) {
      case 1:
        navigation.navigate("StandScouterScreen");
        break;
      case 2:
        navigation.navigate("PitScouterScreen");
        break;
      case 3:
        navigation.navigate("DriveTeamScreen");
        break;
      case 4:
        navigation.navigate("StandScouterAdminScreen");
        break;
      default:
        break;
    }
  };

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
            onPress = {() => handleButtonPress(item)}
            >
              <Text style = {styles.tabText(item)}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle = {{columnGap: SIZES.small}}
        />
      </View>
    </View>
  );
} 