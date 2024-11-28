import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/Screens/HomeScreen.js';
import DetailsScreen from './src/Screens/DetailsScreen.js';
import SetingsScreen from './src/Screens/SetingsScreen.js';


// Configuración del navegador
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Home', headerShown: false }} 
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ title: 'Details', headerShown: false}} 
      />
      <Stack.Screen 
        name="Setings" 
        component={SetingsScreen} 
        options={{ title: 'Settings', headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Details') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Setings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      
      <Tab.Screen name="Home" component={StackNavigator} options={{ headerShown: false }}/>
      <Tab.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Setings" component={SetingsScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Home" 
          component={BottomTabNavigator} 
          options={{ title: 'Unidad 3' }} 
          
        />
        <Drawer.Screen 
          name="Details" 
          component={DetailsScreen} 
        />
        <Drawer.Screen 
          name="Settings" 
          component={SetingsScreen} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

