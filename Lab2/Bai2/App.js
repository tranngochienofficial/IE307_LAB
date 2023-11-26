import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TextInput,
  Button,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

export default function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [value, onChangeText] = useState("");
  const [feedBack, setFeedback] = useState([]);

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleFeedback = () => {
    if(!notificationsEnabled ){  
      setFeedback([...feedBack, value]);
      onChangeText("");
    }
    else{
      setFeedback([...feedBack, value]);
      Alert.alert("Thank you for your feedback!");
      onChangeText("");
    }
  };

  return (
    <KeyboardAvoidingView style={[myStyles.container, darkModeEnabled && myStyles.darkContainer]} behavior='height'>
      <View style={myStyles.viewLogo}>
        <Image style={[myStyles.imageLogo, , darkModeEnabled && myStyles.darkImageLogo]}
          source={{
            uri: 'https://shopify.github.io/react-native-skia/img/logo.png'
          }}
        />
        <Text style={[myStyles.txtLogo, darkModeEnabled && myStyles.darkTxtLogo]}>
          React Native App
        </Text>
      </View>
      <View style={myStyles.viewSwitch}>
        <Text style={[myStyles.txtSwitch, darkModeEnabled && myStyles.darkTxtSwitch]}>
          Dark Mode
        </Text>
        <Switch onValueChange={toggleDarkMode} value={darkModeEnabled} />
      </View>
      <View style={myStyles.viewSwitch}>
        <Text style={[myStyles.txtSwitch, darkModeEnabled && myStyles.darkTxtSwitch]}>
          Notifications
        </Text>
        <Switch onValueChange={toggleNotifications} value={notificationsEnabled} />
      </View>
      <Text style={[myStyles.txtFeedback, darkModeEnabled && myStyles.darkTxtFeedback]}>
        Feedback
      </Text>
      <View style={[myStyles.viewInput, darkModeEnabled && myStyles.darkViewInput]}>
        <TextInput style={[myStyles.txtInput, darkModeEnabled && myStyles.darkTxtInput]}
          editable
          multiline
          onChangeText={text => onChangeText(text)}
          placeholder='Your feedback here...'
          value={value}
        />
      </View>
      <View style={myStyles.viewBtnFeedBack}>
        <Button title="SEND FEEDBACK" onPress={handleFeedback} />
      </View>
      <View style={myStyles.viewDisplayFB}>
        <Text style={[myStyles.txtTitleQuestion, darkModeEnabled && myStyles.darkTxtTitleQuestion]}>
          Frequently Asked Questions
        </Text>
      </View>
      <View style={myStyles.viewTxtQuestion}>
        {feedBack.map((item, index) => (
          <Text key={index} style={[myStyles.txtAskedQuestion, darkModeEnabled && myStyles.darkTxtAskedQuestion]}>
            {"20521309: "}{item}
          </Text>
        ))}
      </View>
    </KeyboardAvoidingView>
  );
}

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginTop: 30,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    marginTop: 30,
  },
  viewLogo: {
    alignItems: 'center',
  },
  imageLogo: {
    width: 170,
    height: 170,
    backgroundColor: 'black',
    borderRadius: 100,
  },
  darkImageLogo: {
    width: 170,
    height: 170,
    backgroundColor: '#666666',
    borderRadius: 100,
  },
  txtLogo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  darkTxtLogo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  viewSwitch: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  txtSwitch: {
    fontSize: 17,
    color: 'black',
  },
  darkTxtSwitch: {
    fontSize: 17,
    color: 'white',
  },
  txtFeedback: {
    fontSize: 23,
    marginTop: 20,
    marginVertical: 10,
    color: 'black',
  },
  darkTxtFeedback: {
    color: 'white',
  },
  viewInput: {
    height: 130,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
  },
  darkViewInput: {
    height: 130,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#bfbfbf',
    backgroundColor: '#666666',
  },
  txtInput: {
    fontSize: 18,
    color: 'black',
  },
  darkTxtInput: {
    color: 'white',
  },
  viewBtnFeedBack: {
    width: '100%',
    marginTop: 10,
    marginBottom: 25,
  },
  txtTitleQuestion: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  darkTxtTitleQuestion: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  txtAskedQuestion: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'black',
  },
  darkTxtAskedQuestion: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
  },
  viewDisplayFB: {
    marginBottom: 10,
  },
});
