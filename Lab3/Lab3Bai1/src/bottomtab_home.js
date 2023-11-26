import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Button,
   SafeAreaView,
} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import NotificationDrawerScreen from './drawer_navi_notification';
import HelpDrawerScreen from './drawer_navi_help';

// TODO: MAIN TODO:
export default function HomeScreen({navigation}) {
   const fromHometoHomeDetail = () => {
      navigation.navigate('Home Detail');
   };

   return (
      <SafeAreaView style={myStyles.container}>
         <View style={myStyles.viewTopSection}>
            <Text>Home Screen</Text>
            <Button
               onPress={fromHometoHomeDetail}
               title="GO TO DETAILS"
            />
         </View>
      </SafeAreaView>
   );
}

const myStyles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: 25,
   },
   viewTopSection: {
      flex: 0.93,
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
   },
});