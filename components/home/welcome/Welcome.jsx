import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useRouter, Link } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
import { ScrollView } from "react-native-gesture-handler";

const jobs = [
  "Stand Scouter",
  "Pit Scouter",
  "Drive Team",
  "Stand Scouter Admin",
];

function Welcome() {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.BigTeal}> Welcome to TealAlliance </Text>
        <Text style={styles.whiteText}> Select Your Current Role </Text>
      </View>

      <View style={styles.tabsContainer}>
        {/* <FlatList
          data={jobs}
          renderItem={({ item }) => (
            
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
        /> */}
        <ScrollView>
          {jobs.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.tab(item), { marginBottom: SIZES.xLarge }]}
              onPress={() => {
                router.push("/standScouterAdmin");
              }}
            >
              <Text style={styles.tabText(item)}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default Welcome;
