import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   Button,
   Alert,
   SafeAreaView,
   KeyboardAvoidingView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen(){
   return (
      <SafeAreaView style = {myStyles.container}>
         <View style = {myStyles.viewTopSection}>
            <Text>Home Screen</Text>
         </View>
         {/* <View style = {myStyles.viewBottomSection}>
            <View style = {myStyles.viewTabSelection}>
               <Ionicons name="home" style = {myStyles.viewIcon} />
               <Text style = {myStyles.txtWithIcon}>Home</Text>
            </View>
            <View style = {myStyles.viewTabSelection}>
               <Image style = {myStyles.iconTab} 
                  source = {require('./images/icons/categories.png')}/>
               <Text style = {myStyles.txtWithIcon}>Categories</Text>
            </View>
            <View style = {myStyles.viewTabSelection}>
               <Image style = {myStyles.iconTab} 
                  source = {require('./images/icons/favorite.png')}/>
               <Text style = {myStyles.txtWithIcon}>Favorites</Text>
            </View>
            <View style = {myStyles.viewTabSelection}>
               <Image style = {myStyles.iconTab} 
                  source = {require('./images/icons/account.png')}/>
               <Text style = {myStyles.txtWithIcon}>Profile</Text>
            </View>
         </View> */}
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
   viewTopSection:{
      flex: 0.93,
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
   },
   viewBottomSection:{
      flex: 0.07,
      flexDirection: 'row',
      width: "100%",
      backgroundColor: "white",
      paddingHorizontal: 30,
      justifyContent: 'space-between',
   },
   viewTabSelection:{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
   },
   viewIcon: {
      color: 'black',
      fontSize: 27,
   },
   viewIconSelect: {
      color: 'blue',
      fontSize: 27,
   },
   txtWithIcon:{
      color: 'black',
   },
   txtWithIconSelect:{
      color: 'blue',
   },
   iconTab:{
      width: 24,
      height: 24,
      tintColor: 'black',
   },
   iconTabSelect:{
      width: 24,
      height: 24,
      tintColor: 'blue',
   },

});