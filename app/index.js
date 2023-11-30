import { useState } from 'react';
import { Stack, useRouter, Link } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn } from '../components'

import {
    View,
    ScrollView,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native'

import styles from '../components/home/welcome/welcome.style'

const jobs = [
    {
        name: "Stand Scouter",
        route: "stand_scouter"
    },
    {
        name: "Pit Scouter",
        route: "pit_scouter"
    },
    {
        name: "Drive Team",
        route: "drive_team"
    },
    {
        name: "Stand Scouter Admin",
        route: "stand_scouter_admin"
    }
]

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
            data = {jobs}
            renderItem = {({ item }) => (
              
            )}
            keyExtractor = {item => item.name}
            contentContainerStyle = {{columnGap: SIZES.small}}
          /> */}
                <ScrollView>
                    {jobs.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.tab(item.name), { marginBottom: SIZES.xLarge }]}
                            onPress={() => {
                                router.push(`/${item.route}`)
                            }}
                        >
                            <Text style={styles.tabText(item.name)}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

export default function Home() {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black2 }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.teal },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="125%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.tvhead} dimension="225%" />
                    ),
                    headerTitle: "Home",
                    headerTitleAlign: 'center'
                }}

            />

            <ScrollView showVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome />

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}