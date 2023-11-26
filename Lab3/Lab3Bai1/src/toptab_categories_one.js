import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   SafeAreaView,
} from 'react-native';

export default function CategoriesScreenOne(){
   return (
      <SafeAreaView style = {myStyles.container}>
         <View style = {myStyles.viewTopSection}>
            <Text>Categories One</Text>
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
   viewTopSection:{
      flex: 0.93,
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
   },
});