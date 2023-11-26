import React, { useState } from 'react';
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
   TouchableOpacity,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//TODO: MAIN TODO:
export default function LoginScreen({ navigation }) {
   const [myEmail, setMyEmail] = useState("");
   const [myPassword, setMyPassword] = useState("");

   const loginButton = () => {

      if (myEmail == "20521309@gm.uit.edu.vn" && myPassword == "tranngochien") {
         navigation.navigate('Tab Stack');
         setMyEmail("");
         setMyPassword("");
      }
      else {
         Alert.alert("Incorrect email or password.");
      }
   };

   const signUpEvents = () => {
      navigation.navigate('Sign Up');
   };


   return (
      <KeyboardAvoidingView style={myStyles.container}>
         <View style={myStyles.viewLogo}>
            <Image style={myStyles.imageLogo}
               source={{
                  uri: 'https://shopify.github.io/react-native-skia/img/logo.png'
               }}
            />
            <View style={myStyles.viewTxtLogo}>
               <Text style={myStyles.txtLogo}>Wellcome</Text>
            </View>
         </View>
         <View style={myStyles.viewTxtInputSection}>
            <Fontisto name="email" size={26} color="black" marginLeft={18} />
            <TextInput style={myStyles.txtInputBox}
               editable
               placeholder='Enter email'
               keyboardType='email-address'
               // onChangeText={text => onChangeText(text)}
               onChangeText={setMyEmail}
               value={myEmail}
            />
         </View>
         <View style={myStyles.viewTxtInputSection}>
            <MaterialIcons name="lock-outline" size={26} color="black" marginLeft={18} />
            <TextInput style={myStyles.txtInputBox}
               editable
               placeholder='Password'
               secureTextEntry={true}
               onChangeText={setMyPassword}
               value={myPassword}
            />
         </View>
         <View style={myStyles.viewForPass}>
            <TouchableOpacity>
               <Text style={myStyles.txtForPass}>Forgot password?</Text>
            </TouchableOpacity>
         </View>
         {/* TODO: Login Button */}
         <TouchableOpacity
            style={myStyles.viewButton}
            onPress={loginButton}>
            <View>
               <Text style={myStyles.txtLogin}>LOG IN</Text>
            </View>
         </TouchableOpacity>
         <View style={myStyles.viewLoginWith}>
            <Text style={myStyles.txtLoginWith}>Or login with</Text>
         </View>
         <View style={myStyles.viewLoginLogo}>
            <Image style={myStyles.imgLoginLogo}
               source={{
                  uri: 'https://www.fundacionalta.org/img/ico_facebook.png'
               }}
            />
            <Image style={myStyles.imgLoginLogo}
               source={{
                  uri: 'https://sherloc.unodc.org/cld/uploads/images/googleicon.png'
               }}
            />
         </View>
         <View style={myStyles.viewHaveAnAcount}>
            <Text style={myStyles.txtHaveAnAccount}>Don't have an account?</Text>
            <TouchableOpacity
               onPress={signUpEvents}>
               <Text style={myStyles.txtSignUpHere}> Sign up here!</Text>
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
      marginVertical: 15,
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
      justifyContent: 'center',
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
