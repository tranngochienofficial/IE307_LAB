import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   KeyboardAvoidingView,
   TouchableOpacity,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function SignUpScreen({ navigation }) {
const fromSignUptoLogin = () => {
   navigation.navigate('Login');
};
   return (
      <KeyboardAvoidingView style={myStyles.container} behavior='height'>
         <View style={myStyles.viewLogo}>
            <Image style={myStyles.imageLogo}
               source={{
                  uri: 'https://shopify.github.io/react-native-skia/img/logo.png'
               }}
            />
            <View style={myStyles.viewTxtLogo}>
               <Text style={myStyles.txtLogo}>20521309</Text>
            </View>
         </View>
         <View style={myStyles.viewTxtInputSection}>
            <MaterialCommunityIcons name="account-circle-outline" size={26} color="black" marginLeft={18} />
            <TextInput style={myStyles.txtInputBox}
               placeholder='Enter username'
            />
         </View>
         <View style={myStyles.viewTxtInputSection}>
            <Fontisto name="email" size={26} color="black" marginLeft={18} />
            <TextInput style={myStyles.txtInputBox}
               placeholder='Enter email'
               keyboardType='email-address'
            />
         </View>
         <View style={myStyles.viewTxtInputSection}>
            <MaterialIcons name="lock-outline" size={26} color="black" marginLeft={18} />
            <TextInput style={myStyles.txtInputBox}
               placeholder='Password'
               secureTextEntry={true}
            />
         </View>
         <View style={myStyles.viewTxtInputSection}>
            <MaterialIcons name="lock-outline" size={26} color="black" marginLeft={18} />
            <TextInput style={myStyles.txtInputBox}
               placeholder='Confirm password'
               secureTextEntry={true}
            />
         </View>
         <View style={myStyles.viewButton}>
            <Text style={myStyles.txtLogin}>CREATE</Text>
         </View>
         <View style={myStyles.viewHaveAnAcount}>
            <Text style={myStyles.txtHaveAnAccount}>Already an account?</Text>
            <TouchableOpacity 
               onPress = {fromSignUptoLogin}>
               <Text style={myStyles.txtSignUpHere}> Login now!</Text>
            </TouchableOpacity>
         </View>

      </KeyboardAvoidingView>
   );
}

const myStyles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      padding: 40,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
   },
   viewLogo: {
      alignItems: 'center',
   },
   imageLogo: {
      width: 100,
      height: 100,
      backgroundColor: 'black',
      borderRadius: 100,
      resizeMode: 'center',
   },
   viewTxtLogo: {
      marginVertical: 10,
   },
   txtLogo: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'black',
   },
   viewTxtInputSection: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: 20,
      alignItems: 'center',
      borderRadius: 10,
      borderColor: '#666666',
      borderWidth: 1,
   },
   imgAccountScreen: {
      width: 30,
      height: 30,
      marginLeft: 10,
      padding: 10,
   },
   txtInputBox: {
      height: 50,
      width: '87%',
      paddingLeft: 15,
      fontSize: 18,
      color: 'black',
      borderRadius: 10,
   },

   viewForPass: {
      width: '100%',
      textAlign: 'right',
      marginVertical: 7,
   },
   txtForPass: {
      color: 'red',
      textAlign: 'right',
   },
   viewButton: {
      backgroundColor: '#ff6600',
      width: '100%',
      height: 50,
      marginVertical: 25,
      borderRadius: 10,
      justifyContent: 'center',
      textAlign: 'center',
   },
   txtLogin: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center'
   },
   viewLoginWith: {
      marginVertical: 10,
   },
   txtLoginWith: {
      fontSize: 17,
      fontWeight: 'bold',
   },
   viewLoginLogo: {
      width: '33%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'space-between',
      marginVertical: 20,
   },
   imgLoginLogo: {
      width: 45,
      height: 45,
   },
   viewHaveAnAcount: {
      flexDirection: 'row',
      textAlign: 'center',
   },
   txtSignUpHere: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'blue',
   },
   txtHaveAnAccount: {
      fontSize: 17,
   },
});
