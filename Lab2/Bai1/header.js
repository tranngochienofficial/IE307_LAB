import React from 'react';
import {
   Text,
   View,
   StyleSheet,
} from 'react-native';

export default function Header({appName}) {
   return (
      <View style={myStyles.bgTitle}>
         <Text style={myStyles.textTitle}>{appName}</Text>
      </View>
   );
}

const myStyles = StyleSheet.create({
   bgTitle: {
      padding: 20,
      backgroundColor: 'blue',
   },
   textTitle: {
      textAlign: 'center',
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
   },
});