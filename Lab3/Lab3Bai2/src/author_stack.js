import React from 'react';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './src/sign_up';
import LoginScreen from './src/login_screen';
import TabStack from './src/tab_stack';


export default function AuthorStack() {
   const Stack = createStackNavigator();
   return (
      <Stack.Navigator
         initialRouteName="Login"
         screenOptions={{
            headerShown: false
         }}>
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Sign Up" component={SignUpScreen} />
         <Stack.Screen name="Tab Stack" component={TabStack} />
      </Stack.Navigator>
   );
};
