import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './author_signup';
import LoginScreen from './author_login';
import TabStack from './bottom_tab_stack';
import HomeDetail from './bottomtab_home_detail';

export default function AuthorStack() {
   const Stack = createStackNavigator();
   return (
      <Stack.Navigator
         initialRouteName='Login'
         screenOptions={({ route }) => ({
            headerShown: route.name == 'Home Detail',
            headerBackVisible: false,
         })}
      >
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Sign Up" component={SignUpScreen} />
         <Stack.Screen name="Tab Stack" component={TabStack} />
         <Stack.Screen name="Home Detail" component={HomeDetail} />
      </Stack.Navigator>
   );
};
