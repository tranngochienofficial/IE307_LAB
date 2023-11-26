import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TopTabNavigator from './toptab_navigator';
import HomeScreen from './bottomtab_home';
import FavoritesScreen from './bottomtab_favorites';
import ProfileScreen from './bottom_profile';

export default function BottomTabNavigator(){
   
   const Tab = createBottomTabNavigator();
   return (
      <Tab.Navigator
         initialRouteName="HomeBottom"
         screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'black',
            tabBarLabelStyle: { fontSize: 16 },
            tabBarStyle: myStyles.tabBarStyle,
            headerShown: false,
         }}
      >
         <Tab.Screen
            name="HomeBottom"
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
            component={TopTabNavigator}
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