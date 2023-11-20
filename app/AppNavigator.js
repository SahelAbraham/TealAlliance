import React from 'react';
import StandScouterAdminScreen from '../components/StandScouterAdminScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="StandScouterAdminScreen" component={StandScouterAdminScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AppNavigator;
