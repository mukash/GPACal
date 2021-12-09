import React from 'react';
import HomeScreen from './screens/HomeScreen';
import GPACalScreen from './screens/GPACalScreen';
import CGPACalScreen from './screens/CGPACalScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#818cf8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="GPACal"
          component={GPACalScreen}
          options={{
            headerStyle: {
              backgroundColor: '#818cf8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center',
            },
            title: 'GPA Calculator',
          }}
        />
        <Stack.Screen
          name="CGPACal"
          component={CGPACalScreen}
          options={{
            headerStyle: {
              backgroundColor: '#818cf8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center',
            },
            title: 'CGPA Calculator',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
