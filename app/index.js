import * as React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeComponent from '../components/home/welcome/Welcome';
import StandScouterAdminComponent from '../components/StandScouterAdminScreen';

import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn } from '../components';
import { Footer } from '../components/common/footer/Footer';

const Stack = createNativeStackNavigator();

function Home(){
    
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
                        headerTitleAlign: "Center"
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
                
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Welcome" component={WelcomeComponent} />
                        <Stack.Screen name="Admin" component={StandScouterAdminComponent} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
    )
}

export default Home;