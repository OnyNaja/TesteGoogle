import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";

const navigationRef = createNavigationContainerRef()

function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function HomeF({ navigation }) {
  return (
    <Home navigation={navigation}/>
  );
}

function AboutF({ navigation }) {
  return (
    <About navigation={navigation}/>
  );
}

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer 
      ref={navigationRef}>
      <RootStack.Navigator
          screenOptions={{headerShown: false}}
      >
        <RootStack.Screen name="Home" component={HomeF} />
        <RootStack.Screen name="About" component={AboutF} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
