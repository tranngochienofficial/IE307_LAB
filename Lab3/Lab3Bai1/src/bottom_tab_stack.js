import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationDrawerScreen from './drawer_navi_notification';
import HelpDrawerScreen from './drawer_navi_help';
import BottomTabNavigator from './bottom_tab_navi';
import NotificationDetail from './drawer_notification_detail';

export default function DrawerStack() {
   const Drawer = createDrawerNavigator();
   const Stack = createStackNavigator();

   const NotificationStack = () => (
      <Stack.Navigator>
         <Stack.Screen
            name="Notifications"
            component={NotificationDrawerScreen}
            options={{
               headerShown: false,
            }}
         />
         <Stack.Screen
            name="NotificationDetail"
            component={NotificationDetail}
            options={{
               title: 'Notification Detail',
            }}
         />
      </Stack.Navigator>
   );

   return (
      <Drawer.Navigator>
         <Drawer.Screen
            name="Home"
            component={BottomTabNavigator}
            options={{ 
               drawerLabel: 'Home',
               drawerIcon: ({}) => (
                  <Ionicons name="ios-home-outline" size={24} color="black" />               ),
            }}
         />
         <Drawer.Screen
            name="Notifications"
            component={NotificationStack}
            options={{ 
               drawerLabel: 'Notifications',
               drawerIcon: ({}) => (
                  <Fontisto name="bell" size={24} color="black" />
               ),
            }}
         />
         <Drawer.Screen
            name="Helps"
            component={HelpDrawerScreen}
            options={{ 
               drawerLabel: 'Helps', 
               drawerIcon: ({}) => (
                  <Feather name="help-circle" size={24} color="black" />               ),
            }}
         />
      </Drawer.Navigator>
   );
}