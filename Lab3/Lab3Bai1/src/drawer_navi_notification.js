import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Button,
   SafeAreaView,
} from 'react-native';


export default function NotificationDrawer({navigation}){
   
   const fromHometoHomeDetail = () => {
      navigation.navigate('NotificationDetail');
   };

   return (
      <SafeAreaView style = {myStyles.container}>
         <View style = {myStyles.viewTopSection}>
            <Text>Notifications Screen</Text>
            <Button
               onPress = {fromHometoHomeDetail}
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
   viewTopSection:{
      flex: 0.93,
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
   },
});