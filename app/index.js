import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

const Home = () => {

    const router = useRouter();

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black2 }}>
            <Stack.Screen
                options = {{
                    headerStyle: {backgroundColor: COLORS.teal},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension = "125%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.tvhead} dimension = "225%" />
                    ),
                    headerTitle: "Home",
                    headerTitleAlign: 'center'
                }}
            />

            <ScrollView showVerticalScrollIndicator = {false}>
                <View
                    style = {{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                    >
                        <Welcome
                        
                        />
                    </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home;