/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
import WelcomeScreen from './screens/WelcomeScreen';
import ViewScreen from './screens/ViewScreen';
import TextScreen from './screens/TextScreen';        
import QRProfile from './screens/QRProfile';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'White',
          },
          headerTintColor: 'White',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: '' }}
        />
        <Stack.Screen name="View" component={ViewScreen} />
        <Stack.Screen name="Text" component={TextScreen} />
        <Stack.Screen name="QRProfile" component={QRProfile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;