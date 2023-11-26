import React, { useState } from 'react';
import {
   StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home_screen';
import CategoriesScreen from './categories_screen';
import FavoritesScreen from './favorites_screen';
import ProfileScreen from './profile_screen';



export default function TabStack() {
   const Tab = createBottomTabNavigator();
   return (
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'black',
            headerShown: false,
            tabBarLabelStyle: { fontSize: 16 },
            tabBarStyle: myStyles.tabBarStyle,
         }}
      >
         <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
               tabBarLabel: 'Home',
               tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={31} />
               ),
            }}
         />
         <Tab.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
               tabBarLabel: 'Categories',
               tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="category" size={31} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
               tabBarBadge: 3,
               tabBarLabel: 'Favorites',
               tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="favorite" size={31} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
               tabBarLabel: 'Profile',
               tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={31} />
               ),
            }}
         />
      </Tab.Navigator>
   );
};

const myStyles = StyleSheet.create({
   tabBarStyle: {
      height: 55, // Adjust the height as per your requirement
   },
});
