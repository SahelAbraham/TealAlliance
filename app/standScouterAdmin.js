import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import { SIZES } from '../components/index.js';
import styles from '../components/home/welcome/welcome.style.js';

const admin = () => {

  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.BigTeal}> STAND SCOUTER ADMIN </Text>
        <Text style={styles.whiteText}> Select Your Current Role </Text>
      </View>

      <View style={styles.tabsContainer}>
        {/* <FlatList 
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
            /> */}
        <ScrollView>
          {
            jobs.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.tab(item), { marginBottom: SIZES.xLarge }]}
                onPress={() => router.push(`/search/${item}`)}
              >
                <Text style={styles.tabText(item)}>{item.jobName}</Text>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>

    </View>
  )
}
