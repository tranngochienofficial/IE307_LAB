import React, {useState} from "react";
import {
   Text,
   Image,
   StyleSheet,
   TouchableOpacity
} from 'react-native';

export default function Custom_Button({ myPost, btnImage, btnText, myHandleOnClick }) {
   const [isClicked, setIsClicked] = useState(false);
   const handleButtonClick = () => {
      setIsClicked(!isClicked);
      myHandleOnClick(myPost.id);
   };

   return (
      <TouchableOpacity
         style={myStyles.buttonContainer}
         onPress={handleButtonClick}>
         <Image source={btnImage} style={myStyles.buttonImage} />
         <Text style={myStyles.textWithButton}>{btnText}</Text>
      </TouchableOpacity>
   );
};

const myStyles = StyleSheet.create({
   textWithButton: {
      fontSize: 15,
      justifyContent: 'center',
      fontWeight: 'bold',
      marginTop: 2,
   },
   buttonImage: {
      width: 25,
      height: 25,
      marginRight: 5,
      justifyContent: 'center',
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
});